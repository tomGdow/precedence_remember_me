'use strict';
// Basic Update Data
const repoName="precedence_remember_me";
const remoteFileDirectory="~/bin/jsdefinitions/operator-precedence-rememberme";
const remoteFileName=remoteFileDirectory.split('/').pop();

let my_update = `
// FROM VISUAL STUDIO ON WINDOWS 10 
    £(1)  powershell                                 // from VS code terminal
    £(2)  ssh tomgxu
    £(3)  // on remote (xu virtual machine)
    £(4)  cp ${remoteFileDirectory} .
    £(5)  vim ${remoteFileName}                     // working with copy `

    //£(5)  %s/\v(^\s+)(\(\d+\))/\1£\2/g                // Global substitution      
    my_update+=`£(6)  \u0025s\/\\v\(^\\s\+\)\(\\\(\\d+\\\)\)\/\\1£\\2\/g`;
    my_update+=`
                                                     // very-magic regex
    £(7)  :wq
    £(8)  exit
    £(9)  // back to powershell  
    £(10) cd data
    £(11) scp tomgxu:~/${remoteFileName} .        // getting the modified file
    £(12) Rename-Item  data.js  old_data.js
    £(13) Copy-item  template.js data.js
    £(14) bash                                   // from powershell on VS code terminal
    £(12) vim data.js 
    £(13) :r ${remoteFileName}               // from within back-ticks
    £(14) :wq
    £(15) exit
    £(16) ssh tomgxu rm ${remoteFileName}
    £(17) exit
    £(18) Remove-Item old_data.js   // ! Careful
    £(19) Remove-Item ${remoteFileName} // ! Careful
    `;

// Note Data
const txtString=[
  `BASH SCRIPTING`,
  `(from xu virtual machine)`,
  `(1) pre-update  // bash script`,
  `(2) vim ~/acp/precedence_remember_me_spa/data/data.js`,
  `(3) :r ~/operator-precedence-rememberme  //vim, from within backticks`,
  `(4) pre-cleanup  // bash script !! careful`,
  `(5) update git and push to github`,
  `(6) sudo git pull from /var/www/html/precedence_remember_me`,
  `(7) sudo service apache2 restart`,
  `NOTES`,
 `(1) The primary data are stored on the virtual machine 'xu',`,
 `(2) Directory:  '${remoteFileDirectory}'`,
 `(3) github repo (private): https://github.com/tomGdow/${repoName}`
];
