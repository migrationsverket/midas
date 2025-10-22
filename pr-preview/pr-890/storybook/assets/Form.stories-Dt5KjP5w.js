import{j as n}from"./iframe-DM9uGbbB.js";import{$ as j}from"./Form-CdJg3Afc.js";import{G}from"./Grid-BUrSwCAo.js";import{G as e}from"./GridItem-Bg6FroRK.js";import{T as r}from"./TextField-66ohAfDP.js";import{S as I}from"./Select-NgRxTzS4.js";import{B as a}from"./Button-BuNqjwlt.js";import{R as g,a as b}from"./Radio-DDptYtPe.js";import{C as h}from"./CheckboxGroup-DzjhR5PE.js";import{C as k}from"./Checkbox-CHhKeQkI.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DG3ZCWHN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-mH7L8PaO.js";import"./useFocusRing-D1sucDT4.js";import"./index-4RmtsECB.js";import"./index-Bx7Dh6gT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CaINvkLY.js";import"./TextField-CJ7Vd_RE.js";import"./FieldError-DeMd9Rmt.js";import"./Text-BFfKfZXz.js";import"./Text-CLdWBA0g.js";import"./RSPContexts-BwxjrvnQ.js";import"./Group-_gzG0owA.js";import"./Input-DPPHo3Pl.js";import"./Hidden-95zpvBSH.js";import"./Button-DVzS06KT.js";import"./useLabels-8MtL7eX8.js";import"./useButton-BWBkfaPO.js";import"./useTextField-Cq0rc_no.js";import"./useControlledState-DEPu0wVg.js";import"./useField-08xpVv1s.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CFJuno6K.js";import"./Dialog-B6oZB0j9.js";import"./OverlayArrow-C1nWLlMg.js";import"./useResizeObserver-DgxHJsot.js";import"./Collection-CMc_T2--.js";import"./index-wce6DnR5.js";import"./Separator-j97lSfpQ.js";import"./SelectionManager-ByDu6Rlc.js";import"./useEvent-OeDS2mmF.js";import"./scrollIntoView-DSun3BHT.js";import"./SelectionIndicator-Cy5wO-iP.js";import"./useDescription-D4HPT6fe.js";import"./ListKeyboardDelegate-wqXHqo76.js";import"./PressResponder-BhSLtmxq.js";import"./useLocalizedStringFormatter-B-fsOSLp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CcoIW0sC.js";import"./VisuallyHidden-DXW6s6xs.js";import"./useLocalizedStringFormatter-Bw05dLT3.js";import"./x-7VSZhcXh.js";import"./createLucideIcon-DmO7-0GB.js";import"./Heading-BFddu6vC.js";import"./info-DLAD0TUn.js";import"./Popover-Cywwk-Ff.js";import"./Tag-B8TPONsk.js";import"./ListBox-hOUDVIQa.js";import"./DragAndDrop-CK3-8iF4.js";import"./inertValue-BYBcwe0T.js";import"./useListState-BRnj7okr.js";import"./useHighlightSelectionDescription-BiC7ajOY.js";import"./useUpdateEffect-C3BLhJRq.js";import"./useHasTabbableChild-DzLHwuBQ.js";import"./check-FtvkmNKs.js";import"./ListBoxSection-9moT5LrG.js";import"./Virtualizer-BYRHDjIl.js";import"./chevron-down-CycKcV94.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-C5DJQwww.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
