import{j as n}from"./iframe-C1dx_r-l.js";import{$ as j}from"./Form-Z6Nig5vC.js";import{G}from"./Grid-C2LRqEvq.js";import{G as e}from"./GridItem-CtKgOgbH.js";import{T as r}from"./TextField-B28W17Gh.js";import{S as I}from"./Select-DVeS1cBu.js";import{B as a}from"./Button-CKa_cdZZ.js";import{R as g,a as b}from"./Radio-B6KNf96S.js";import{C as h}from"./CheckboxGroup-CXSQuLLs.js";import{C as k}from"./Checkbox-NAYdeE2_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C0mmULq9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Y_8zE_BU.js";import"./useFocusRing-C0aHwZcI.js";import"./index-DjWq9ifm.js";import"./index-CaxW-QeE.js";import"./TextFieldBase-CFNWNQ19.js";import"./TextField-Bj_QPjMg.js";import"./FieldError-DMeC6WcG.js";import"./Text-ClksB_oG.js";import"./Text-CEkYTPue.js";import"./ListKeyboardDelegate-BWMOpcvW.js";import"./SelectionManager-BQQbRhjF.js";import"./useEvent-2jhEHfiG.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DB7kad7V.js";import"./useDescription-BrT4HN48.js";import"./useControlledState-CYSqO4RZ.js";import"./Group-C2r5EtAi.js";import"./Input-BPZ-zEVK.js";import"./Hidden-NL98kK7f.js";import"./Button-0dt2Ocxg.js";import"./useLabels-DZF6gE4A.js";import"./useButton-B1vt884z.js";import"./useTextField-D9p8jleh.js";import"./useField-C6v9nWWF.js";import"./TextField.module-DjUItNl5.js";import"./Label-CbG3Jc0p.js";import"./Dialog-D3f_tfmz.js";import"./RSPContexts-DLu-JXyw.js";import"./OverlayArrow-DM-aOv_g.js";import"./useResizeObserver-avozmGtg.js";import"./Collection-Bud2OHeY.js";import"./index-oMbMWvhV.js";import"./Separator-D_8GqjXU.js";import"./PressResponder-CV815Qks.js";import"./useLocalizedStringFormatter-B3TGTXkS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CFYPNdol.js";import"./Dialog-DJ7MgqDv.js";import"./useLocalizedStringFormatter-DOVN24fm.js";import"./x-Bo1gNysc.js";import"./createLucideIcon-4Png5bjA.js";import"./Heading-7vY6fbUq.js";import"./info-EZCxn_Tv.js";import"./Tag-BmUkoIuR.js";import"./ListBox-DISDmKRj.js";import"./DragAndDrop-BXaBPTRQ.js";import"./inertValue-CqOQpCBm.js";import"./useListState-C06TOrQp.js";import"./useHighlightSelectionDescription-BqlK82EM.js";import"./useUpdateEffect-Ca-SFJ5H.js";import"./useHasTabbableChild-BkryEFuh.js";import"./check-BDR_xbvY.js";import"./ListBoxSection-Db0SQrPV.js";import"./Virtualizer-D5BNlnjr.js";import"./useObserveElement-CQQj6ffv.js";import"./chevron-down-CfPJXVFG.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-YzSGh_FS.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
