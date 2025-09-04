import{j as n}from"./iframe-Brw6tsIJ.js";import{$ as j}from"./Form-bHMyzxqw.js";import{G}from"./Grid-AVzlqMC3.js";import{G as e}from"./GridItem-DEMawdcc.js";import{T as r}from"./TextField-CLQLBrLT.js";import{S as I}from"./Select-C1Z3zMZK.js";import{B as a}from"./Button-DcZbgQFz.js";import{R as g,a as b}from"./Radio-NJbstkS9.js";import{C as h}from"./CheckboxGroup-DGBNqvwG.js";import{C as k}from"./Checkbox-DKGmFoK5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Bvz2iZGB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D0TuPdzZ.js";import"./useFocusRing-CYX_qWsm.js";import"./index-BbxebM3I.js";import"./index-BR8oKHRk.js";import"./TextFieldBase-BbcJbkpf.js";import"./TextField-CHq2V8LK.js";import"./FieldError-DfI6y2y6.js";import"./Text-C6C9IJDR.js";import"./Text-nRd4Vohe.js";import"./ListKeyboardDelegate-CwRO4Nui.js";import"./SelectionManager-gEvc8kgS.js";import"./useEvent-Dc9rFbz-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C01-XLFD.js";import"./useDescription-BIhPNaYQ.js";import"./useControlledState-Bmkg3wLB.js";import"./Group-BHP0-4rO.js";import"./Input-DCp38ZuC.js";import"./Hidden-7rsLDPHs.js";import"./Button-BgDR-S3C.js";import"./useLabels-DooHqkzg.js";import"./useButton-B7qomZAK.js";import"./useTextField-U0jhi4db.js";import"./useField-rMpuwDY1.js";import"./TextField.module-BrIGiDQC.js";import"./Label-JaL5rvsa.js";import"./Dialog-BjUC4kxq.js";import"./RSPContexts-CbTzpfuk.js";import"./OverlayArrow-DzpKChb4.js";import"./useResizeObserver--8fi7u4Z.js";import"./Collection-CKLvBHyi.js";import"./index-BKMaJt_O.js";import"./Separator-Cosu0uxc.js";import"./PressResponder-BjakX8ME.js";import"./useLocalizedStringFormatter-ew4jiiFZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DDmaVVhB.js";import"./Dialog-CR9nYX7p.js";import"./useLocalizedStringFormatter-DksI1si8.js";import"./x-CzfS78Iy.js";import"./createLucideIcon-BCsrHOl6.js";import"./Heading-B6N61QO9.js";import"./info-DJJWhshv.js";import"./Tag-CddYIF5Z.js";import"./ListBox-DiL_b4G9.js";import"./DragAndDrop-UKtqXNfe.js";import"./inertValue-HgIswYss.js";import"./useListState-XrqADz0u.js";import"./useHighlightSelectionDescription-CEWRqzee.js";import"./useUpdateEffect-3BA1e2ml.js";import"./useHasTabbableChild-CdlfUWb-.js";import"./check-WQpAqPVl.js";import"./ListBoxSection-tLk-bm42.js";import"./Virtualizer-DupVrPU5.js";import"./useObserveElement-DQuEPYvU.js";import"./chevron-down-CwI4E80M.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-ChdLtjtU.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
