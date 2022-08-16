## Modern React

This repository includes assignments and my discoveries from the course [Modern React with Redux (Udemy)](https://www.udemy.com/course/react-redux/)

### Security Notes: 
Some projects of this repo require storing private data inside the files. You need a way how to encrypt and decrypt these secrets.
This repositoy is backed by
[BlackBox](https://github.com/StackExchange/blackbox#alternatives) and your secrets are stored encrupted using GPG.

#### Instructions:  
Follow the instruction how to setup [BlackBox](https://github.com/StackExchange/blackbox#alternatives)

Here are frequently used commands for encrypting and decripting files:
- blackbox_register_new_file FILENAME
- blackbox_deregister_file FILENAME
- blackbox_edit_start FILENAME
- blackbox_edit_end FILENAME
- blackbox_edit FILENAME
- blackbox_addadmin
- blackbox_removeadmin

.blackbox/blackbox-admins.txt - contains a list of users who are able to decript files. To join the list of people that can edit the file requires three steps; You create a GPG key and add it to the key ring. Then, someone that already has access adds you to the system. Lastly, you should test your access.

You can use your secrets with Ansible too (see docs)

There are free good alternatives availaible:
- [git-secret](https://github.com/sobolevn/git-secret)
- [transcrypt](https://github.com/elasticdog/transcrypt)
