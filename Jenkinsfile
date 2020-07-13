#!/usr/bin/env groovy
pipeline {

    // Run everything on an existing agent configured with a label 'docker-agent'.

    agent {
        node {
            label 'docker-agent'
        }
    }

    stages {
        stage('Test') {
            steps {
                // Run the tests
                sh 'pwd'
                sh 'ls'
                sh 'docker run -v $PWD:/test -w /test  cypress/included:4.10.0 --browser chrome'
            }
        }
    }

}

