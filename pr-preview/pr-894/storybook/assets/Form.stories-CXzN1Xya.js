import{j as n}from"./iframe-uM3qqLC1.js";import{$ as j}from"./Form-DkVrIBr8.js";import{G}from"./Grid-bXwYR1r1.js";import{G as e}from"./GridItem-BpythIeu.js";import{T as r}from"./TextField-C-U2X12M.js";import{S as I}from"./Select-DA6cEcj0.js";import{B as a}from"./Button-CRoPWYQa.js";import{R as g,a as b}from"./Radio-WNDJgc9d.js";import{C as h}from"./CheckboxGroup-cfCym8vM.js";import{C as k}from"./Checkbox-DAIXS_Yn.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-HBEDfByc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DEevSaEL.js";import"./useFocusRing-BSauiWtM.js";import"./index-C5wsGSUN.js";import"./index-BQhIt1Gf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-OPsH3bfx.js";import"./TextField-DVmWJEBC.js";import"./FieldError-fesfb5V0.js";import"./Text-CN_gt17r.js";import"./Text-DdIJpOEx.js";import"./RSPContexts-wp9z8r7-.js";import"./Group-DlN1b6RU.js";import"./Input-ClOdjlEt.js";import"./Hidden-ChuQCa3d.js";import"./Button-DoT16R3T.js";import"./useLabels-BbpNPeJk.js";import"./useButton-DypzjKrp.js";import"./useTextField-DEOyDh2U.js";import"./useControlledState-B_Yl3B1s.js";import"./useField-BvOstTO2.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BOimuNTz.js";import"./Dialog-DefFKKQX.js";import"./OverlayArrow-5eMsSPe4.js";import"./useResizeObserver-UyeqCfni.js";import"./Collection-DAZN5MPL.js";import"./index-BaF5gIKz.js";import"./Separator-CzB7FZLb.js";import"./SelectionManager-B_UDqW10.js";import"./useEvent-BEHJp5pG.js";import"./scrollIntoView-pXO9z5Y4.js";import"./SelectionIndicator-DTaITcQ9.js";import"./useDescription-BOjEw7RY.js";import"./ListKeyboardDelegate-BCGIj1pT.js";import"./PressResponder-Rm9Z6Ye4.js";import"./useLocalizedStringFormatter-BU3ytf7Q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DBoSOlsB.js";import"./VisuallyHidden-BEDBVj9V.js";import"./useLocalizedStringFormatter-pVaeEqD7.js";import"./x-Dd0VmR0s.js";import"./createLucideIcon-DguizvGn.js";import"./Heading-B6zBoIyn.js";import"./info-CC7wATOc.js";import"./Popover-BjG3VRN1.js";import"./Tag-DwG2Old3.js";import"./ListBox-AXlsGz-s.js";import"./DragAndDrop-CtkSXa_q.js";import"./inertValue-D5Osij4N.js";import"./useListState-BTBQnAW5.js";import"./useHighlightSelectionDescription-CJpeFHMS.js";import"./useUpdateEffect-B6x6sWe_.js";import"./useHasTabbableChild-BxRfn6GO.js";import"./check-CQQnFf0M.js";import"./ListBoxSection-VZBLCBGQ.js";import"./Virtualizer-Be_EMmX1.js";import"./chevron-down-BcASx8a-.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CrSWc9Ha.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
