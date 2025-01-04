import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { Task, taskPriority, taskStatus } from "../entities/task"


interface TaskCardProps {
    task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

    const getActionText = (status: taskStatus) => {
        const actionsTexts = {
            "todo": "Iniciar",
            "doing": "Concluir",
            "done": "Arquivar"
        }
        return actionsTexts[status]
    }

    const getActionColor = (status: taskStatus) => {
        const actionColors : {[key: string]: "indigo" | "green" | "bronze"} = {
            "todo": "indigo",
            "doing": "green",
            "done": "bronze",
        }
        return actionColors[status]
    }

    const getPriortyColor = (priority: taskPriority) => {
        const priorityColors : {[key:string]: "green" | "yellow" | "red"} = {
            "low": 'green',
            "medium": 'yellow',
            "high": 'red',
        }
        return priorityColors[priority]
    }

    return(
        <Card>
            <Flex align={"center"} gap={"4"}>
                <Heading as="h3" size={"3"}>{task.title}</Heading>
                <Badge color={getPriortyColor(task.priority)}>{task.priority}</Badge>
            </Flex>

            <Text as="p" my={"4"}>{task.description}</Text>

            <Flex gap={"2"}>
                {task.status !== "done" && (
                <Button color={getActionColor(task.status)}>
                {getActionText(task.status)}
            </Button>
                )}
                <Button color="red">Excluir</Button>
                
            </Flex>
        </Card>
    )
}