import{j as n}from"./iframe-y9uuekUc.js";import{$ as j}from"./Form-C9VlD6fU.js";import{G}from"./Grid-urcfYlCf.js";import{G as e}from"./GridItem-yLVbmg4v.js";import{T as r}from"./TextField-_ABlyIVE.js";import{S as I}from"./Select-QjdQIj8S.js";import{B as a}from"./Button-D0nH05B-.js";import{R as g,a as b}from"./Radio-CSoQBQeR.js";import{C as h}from"./CheckboxGroup-CgeOlIRF.js";import{C as k}from"./Checkbox-B765jCwk.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BOOf_RxS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNuJtEmS.js";import"./useFocusRing-DgqJKS3P.js";import"./index-CSM-wFU-.js";import"./index-DQDLrlYC.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BNGJ24SZ.js";import"./TextField-CB7g5tNL.js";import"./FieldError-W6MddWrl.js";import"./Text-BsztM0-2.js";import"./Text-BYLS2JvG.js";import"./RSPContexts-B-b70SPC.js";import"./Group-C42tw8mI.js";import"./Input-uqUf-3WE.js";import"./Hidden-tfsUb2xF.js";import"./Button-CW4NbYhP.js";import"./useLabels-DD7e7PFw.js";import"./useButton-8_4OWKui.js";import"./useTextField-CZLMst1L.js";import"./useControlledState-CxXMcrLs.js";import"./useField-CCbWPvhp.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CwsCx0RP.js";import"./Dialog-D-tX2ZYt.js";import"./OverlayArrow-Bk27JTuZ.js";import"./useResizeObserver-CqIjW1kB.js";import"./Collection-BpxZfSNa.js";import"./index-CfH6taAq.js";import"./Separator-CzcGgmwL.js";import"./SelectionManager-CkMRR79S.js";import"./useEvent-DvoteD7k.js";import"./scrollIntoView-Pihf25Bv.js";import"./SelectionIndicator-BfIp3Zhm.js";import"./useDescription-B4URw9SA.js";import"./ListKeyboardDelegate-BvWPNBYD.js";import"./PressResponder-j1FXJsQA.js";import"./useLocalizedStringFormatter-BO32D2UM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CUy2RDi4.js";import"./VisuallyHidden-BcfqDqnM.js";import"./useLocalizedStringFormatter-DE7570FH.js";import"./x-VsXfoZeH.js";import"./createLucideIcon-1u2ysGfk.js";import"./Heading-DCd5ePas.js";import"./info-8CT4cxMK.js";import"./Popover-BSohOobR.js";import"./Tag-CqkY6jnt.js";import"./ListBox-DkJQXFdU.js";import"./DragAndDrop-DzbFacsR.js";import"./inertValue-pS5CKxlw.js";import"./useListState-Ba03wFF8.js";import"./useHighlightSelectionDescription-vhglpjNa.js";import"./useUpdateEffect-Dwx5aHhF.js";import"./useHasTabbableChild-Dc_2EePG.js";import"./check-DrceQFny.js";import"./ListBoxSection-_j5bvyCv.js";import"./Virtualizer-BreN1_O-.js";import"./chevron-down-D912V0Fv.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-D0BsbZ0c.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
