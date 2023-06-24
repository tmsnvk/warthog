// postgresql connection.
import pool from '@config/pgConfig.config';
// service models.
import {
  CreateRecordParameterT,
  CreateRecordQueryT,
  CreateRecordReturnT,
} from '@custom-types/pg/user.types';

// ** basicOperationsService | service object ** //
//
const basicOperationsService = {
  async createRecord({ email, firstName, lastName, role, id }: CreateRecordParameterT): Promise<CreateRecordReturnT> {
    try {
      const { rows }: CreateRecordQueryT = await pool.query(`
        INSERT INTO people_records (
          email,
          first_name,
          last_name,
          user_type,
          user_id
        )

        VALUES (
          $1,
          $2,
          $3,
          $4,
          $5
        )
        RETURNING
          created_at;
      `, [email, firstName, lastName, role, id]);

      const tableVisualisation = [
        {
          tableName: 'people_records',
          tableColumns: [
            ['email', email],
            ['first_name', firstName],
            ['last_name', lastName],
            ['user_type', role],
            ['user_id', id],
            ['created_at', new Date(rows[0].created_at).toLocaleString()],
          ],
        },
      ];

      const queryVisualisation = [
        {
          pgCommandOpen: 'INSERT INTO people_records (',
          dataFields: ['email', 'first_name', 'last_name', 'user_type', 'user_id', 'created_at'],
          pgCommandClose: ')',
        },
        {
          pgCommandOpen: 'VALUES (',
          dataFields: [email, firstName, lastName, role, id, new Date(rows[0].created_at).toLocaleString()],
          pgCommandClose: ');',
        },
      ];

      return {
        tableVisualisation,
        queryVisualisation,
      };
    } catch (error: unknown) {
      console.error(error);
    }
  },
};

export default basicOperationsService;
