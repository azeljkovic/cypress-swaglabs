#!/usr/bin/env groovy
pipeline {

    // Run everything on an existing agent configured with a label 'docker-agent'.

    agent {
        node {
            label 'docker-agent'
            image 'cypress/included:4.10.0'
        }
    }

    stages {
        stage('build') {
            steps {
                // there a few default environment variables on Jenkins
                // on local Jenkins machine (assuming port 8080) see
                // http://localhost:8080/pipeline-syntax/globals#env
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm ci'
                sh 'npm run cy:verify'
                 }
         }

        stage('tester A') {
            steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run cypress:ci"
          }

        //stage('Test') {
        //    steps {
        //        // Run the tests
        //        sh 'pwd'
        //        sh 'ls'
        //        sh 'id'
        //        sh 'docker run -t -v $PWD:/test -w /test  cypress/included:4.10.0 --browser chrome'
        //    }
        //}
    }

}

