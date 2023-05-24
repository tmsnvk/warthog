// postgresql connection.
import pool from '@config/pgConfig.config';
// service models.
import {
  AddNewUserQueryType,
  AddNewUserReturnType,
} from '@custom-types/pg/users.types';

// ** userService | service object ** //
//
const userService = {
  async addNew(email: string, firstName: string, lastName: string, userRole: string, userId: string): Promise<AddNewUserReturnType | undefined> {
    try {
      const { rows }: AddNewUserQueryType = await pool.query(`
        INSERT INTO student_personal_data (
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
      `, [email, firstName, lastName, userRole, userId]);

      const dataToVisualise = [
        {
          pgCommandOpen: 'INSERT INTO student_personal_data (',
          dataFields: ['email', 'first_name', 'last_name', 'user_id', 'user_type', 'created_at'],
          pgCommandClose: ')',
        },
        {
          pgCommandOpen: 'VALUES (',
          dataFields: [email, firstName, lastName, userRole, userId, new Date(rows[0].created_at).toLocaleString()],
          pgCommandClose: ');',
        },
      ];

      return dataToVisualise;
    } catch (error: unknown) {
      console.error(error);
    }
  },
};

export default userService;
