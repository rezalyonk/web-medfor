pipeline {
    agent any
    
    tools {
        nodejs '21.6.1'
    }

    stages {
        stage('Build') {
            steps {
                script{
                    sh 'npm install'
                }
            }
        }

        stage('Testing') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Telah Terdeploy Sampai Tujuan'
                }
            }
        }
    }

    post {
        always{
            echo 'whatever the conditions, it will always be done'
        }

        fixed{
            echo 'whatever the conditions, build, test, deploy. I dont care success or error'
        }

        cleanup{
            echo 'I dont care success or error '
        }
    }
}
