import{j as e}from"./iframe-xAfmlG07.js";import{$ as c}from"./Form-4H72jiU6.js";import{G as d}from"./Grid-kOcHjgME.js";import{G as i}from"./GridItem-CbGikUPW.js";import{a as x,R as u}from"./Radio-BMkPi57E.js";import{C as I}from"./CheckboxGroup-B__8VbBx.js";import{C as G}from"./Checkbox-BhJLaMWj.js";import{T as t}from"./TextField-B4Om7ntt.js";import{S as l}from"./Select-Bdlw0hIK.js";import{L as p}from"./ListBoxItem-BcxBzcl4.js";import{B as a}from"./Button-DlzyzK84.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-9cghZAOb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dc5CfAEv.js";import"./useFocusRing-DuURs6wG.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./clsx-Ciqy0D92.js";import"./Group-E2fDzHxk.js";import"./FieldError-D0XPClu_.js";import"./Text-DTHVKRvi.js";import"./Text-Dg2zxxbH.js";import"./Button-_CPn_6qY.js";import"./Hidden-CaQ6AcOr.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./SelectionIndicator-CUUhQe3s.js";import"./useField-D592B_sa.js";import"./VisuallyHidden-BPCvzmAs.js";import"./useControlledState-B8262pyO.js";import"./Label-CJ5DCym1.js";import"./Dialog-JhXE_H92.js";import"./RSPContexts-COny7Pe5.js";import"./OverlayArrow-BQzg_e_8.js";import"./useResizeObserver-C4Shs2bn.js";import"./Collection-B7cfVZ3K.js";import"./index-CRbTRMO1.js";import"./Separator-CQC-DCEi.js";import"./SelectionManager-CyVU1abT.js";import"./useEvent-juwi-LBt.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BG0yfZwv.js";import"./ListKeyboardDelegate-CcmS_bQH.js";import"./PressResponder-DsrT-E5Y.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwOyL9Gj.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DLZX4-ID.js";import"./createLucideIcon-xLqTy_XU.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";import"./Heading-CnWMyh0q.js";import"./info-6oHHkX08.js";import"./Popover-qRc5bSAQ.js";import"./check-BKG1sG6b.js";import"./useToggleState-Bk9htqiJ.js";import"./TextFieldBase-6TGSlv_S.js";import"./Input-C5boGjK5.js";import"./useTextField-Cmkxs48S.js";import"./TextField.module-B0rcsDrm.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CgDHAN9A.js";import"./DragAndDrop-CYgUNkz5.js";import"./inertValue-CU4BQHTq.js";import"./useListState-BCBIgfEp.js";import"./TagGroup-DzOb02f_.js";import"./useHighlightSelectionDescription-Di-aUAzp.js";import"./useUpdateEffect-BEDR7Mst.js";import"./useHasTabbableChild-CgITi4Zm.js";import"./chevron-down-CIAET5Hw.js";import"./Virtualizer-D5dblaG8.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
