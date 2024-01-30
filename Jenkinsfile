pipeline {
    agent any
    
    tools {
        nodejs '21.6.1'
    }
    
    stages {
        stage('Pull from GitHub') {
            steps {
                script {
                    // Clone the GitHub repository
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/rezalyonk/web-medfor.git']]])
                }
            }
        }
        
        stage('Testing') {
            steps {
                script {
                    // Run 'npm install' for testing
                    sh 'npm install'
                }
            }
        }

        stage('Push to GitLab') {
            steps {
                script {
                    // Push to the GitLab repository using GitLab credentials
                    withCredentials([usernamePassword(credentialsId: 'rezalyonk', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                        sh "git push https://$USERNAME:$PASSWORD@gitlab.com/rezalyonk/web-medfor.git HEAD:main"
                    }
                }
            }
        }
    }
}
