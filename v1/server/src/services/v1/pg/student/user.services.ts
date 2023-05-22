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
  async addNew(email: string, firstName: string, lastName: string, userId: string): Promise<AddNewUserReturnType | undefined> {
    try {
      const { rows }: AddNewUserQueryType = await pool.query(`
        INSERT INTO student_personal_data (
          email,
          first_name,
          last_name,
          user_id,
          user_type
        )

        VALUES (
          $1,
          $2,
          $3,
          $4,
          'student'
        )
        RETURNING
          created_at;
      `, [email, firstName, lastName, userId]);

      const dataToVisualise = [
        {
          pgCommand: 'INSERT INTO',
          tableName: 'student_person_data',
          dataFields: ['email', 'first_name', 'last_name', 'user_id', 'user_type', 'created_at'],
        },
        {
          pgCommand: 'VALUES',
          dataFields: [email, firstName, lastName, userId, 'student', rows[0].created_at],
        },
      ];

      return dataToVisualise;
    } catch (error: unknown) {
      console.error(error);
    }
  },
};

export default userService;
