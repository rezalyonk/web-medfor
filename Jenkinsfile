pipeline {
    agent any
    
    stages {
        stage('Pull from GitHub') {
            steps {
                script {
                    // Cloning the GitHub repository
                    checkout([$class: 'Git', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/rezalyonk/web-medfor.git']]])
                }
            }
        }
        
        stage('Testing') {
            steps {
                script {
                    // Running 'npm install' for testing
                    sh 'npm install'
                }
            }
        }

        stage('Push to GitLab') {
            steps {
                script {
                    // Pushing to the GitLab repository
                    sh 'git push https://gitlab.com/rezalyonk/web-medfor.git HEAD:main'
                }
            }
        }
    }
}
