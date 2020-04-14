# Etherpad
A lightweight, opensource, real-time editor for collaboration. Etherpad allows multiple users to connect and simultaneously edit a text document. Etherpad has an integration in Jitsi meet, creating a shared Etherpad document for each meeeting and allowing participants to access that document simultaneoulsy in real-time.

## Deploy Etherpad on OpenShift
For now the deployment is using the built-in dirty db, this is not recommend for production and should be replaced with mariadb or postgresql. Etherpad must be deployed prior to Jitsi meet, since the etherpad service is consumed and used in the Jitsi meet deployment.

### Template Default Parameters
OpenShift templates allow you to parameterize and automate deployment of all application components. Similar to helm charts.

```$ oc process --parameters -f jitis_meet_template.yaml```

### Deploy Etherpad template

```$ oc process -f etherpad_template.yaml |oc create -f -```