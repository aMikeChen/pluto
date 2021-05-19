import { Box, Button, TextField } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const BoxContainer = styled(Box)({
  marginBottom: '0.4rem',
  padding: '1rem',
  height: 200,
})

const StyledTextArea = styled(TextField)({ flex: 1, height: '100%' })
type Props = {}

function CreatePostBox(props: Props) {
  return (
    <BoxContainer display="flex" flexDirection="column">
      <Box flexGrow={4} display="flex">
        <StyledTextArea
          multiline={true}
          rows={6}
          defaultValue="Write something"
          InputProps={{ disableUnderline: true }}
        />
      </Box>
      <Box flexGrow={1}>
        <Button>Submit</Button>
      </Box>
    </BoxContainer>
  )
}

export default CreatePostBox
