---
layout: page
id: community
---

<div class="row">
  <div class="col s12">
      <h3>People working on Airavata</h3>
      <p>
          Apache Airavata is a community developed project. The list below is a partial list of contributors to the project, for a complete list you'd have to look at all contributors to our issue tracker, mailing list and version control. All project management committee members are also committers of the Airavata project but not vise versa. Please see ASF Roles for explanation of these.</p>
  </div>

  <div class="col s12 ">
                   
     {% if site.data.team %}
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Apache ID</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Roles</th>
              <th>Time Zone</th>
            </tr>
          </thead>
          <tbody>
            {% for member in site.data.team %}
              <tr>
                <th scope="row">{{ member.name }}</th>
                <td scope="row">{{ member.apache_id }}</td>
                <td scope="row">{{ member.email }}</td>
                <td scope="row">{{ member.organization }}</td>
                <td scope="row">{{ member.roles }}</td>
                <td scope="row">{{ member.time_zone }}</td>
              </tr>
            {% endfor %}
          </tbody>
        </table>
    {% endif %}

  </div>

</div>