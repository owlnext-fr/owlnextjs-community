#!/bin/bash

printf "\n";
printf "################################\n"
printf "Importing FR translations\n"
printf "################################\n"
printf "\n";

curl  -X GET \
      -o public/locales/fr/common.json \
      -u INSERT_LOCALIZE_KEY \
      'https://localise.biz/api/export/locale/fr-FR.json?format=i18next3'
