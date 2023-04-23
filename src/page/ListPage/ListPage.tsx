import { PageLayout } from 'shared/layouts';

export const ListPage = () => (
  <PageLayout>
    <div>
      <table>
        <thead>
          <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body 1</td>
            <td>Body 2</td>
            <td>Body 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageLayout>
);
