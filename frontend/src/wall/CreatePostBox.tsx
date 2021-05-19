import { Box, Button, TextField } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const BoxContainer = styled(Box)({
  backgroundColor: 'rgba(193,200,212, 0.1)',
  marginBottom: '0.4rem',
  padding: '1rem',
  height: 200,
})

const StyledTextArea = styled(TextField)({ flex: 1, height: '100%' })
type Props = {}

function CreatePostBox(props: Props) {
  return (
    <BoxContainer display="flex" flexDirection="column">
      <Box flex={1} display="flex">
        <StyledTextArea
          multiline={true}
          rows={6}
          placeholder="Write something"
          InputProps={{ disableUnderline: true, style: { flex: 1 } }}
        />
      </Box>
      <Box display="flex" flexDirection="row-reverse">
        <Button>Submit</Button>
      </Box>
    </BoxContainer>
  )
}

export default CreatePostBox
