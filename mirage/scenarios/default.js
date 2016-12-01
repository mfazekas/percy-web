import moment from 'moment';

export default function(server) {
  server.logging = true;

  let user = server.create('user', {_currentLoginInTest: true});
  let organization = server.create('organization');
  server.create('organizationUser', {user, organization, role: 'admin'});

  let project = server.create('project', {name: 'with builds', organization});
  let build = server.create('build', {project, createdAt: moment().subtract(2, 'minutes') });
  server.create('comparison', {build});
  server.create('comparison', 'wasAdded', {build});
  server.create('comparison', 'wasRemoved', {build});
  server.create('comparison', 'same', {build});
}
