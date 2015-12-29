function save_options() {
  var server = document.getElementById('pw_server').value;
  var username = document.getElementById('pw_username').value;
  var password = document.getElementById('pw_password').value;
  chrome.storage.sync.set({
    server: server,
    username: username,
    password: password
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Settings saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    server: '',
    username: '',
    password: '',
  }, function(items) {
    document.getElementById('pw_server').value = items.server;
    document.getElementById('pw_username').value = items.username;
    document.getElementById('pw_password').value = items.password;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

