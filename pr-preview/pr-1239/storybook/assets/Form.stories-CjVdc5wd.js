import{j as e}from"./iframe-DWjCTUGS.js";import{c}from"./Form-fTl9ZSRE.js";import{G as d}from"./Grid-DTBKr2YE.js";import{G as i}from"./GridItem-Ba7NB-qt.js";import{a as x,R as u}from"./Radio-Ck0S1CcG.js";import{C as I}from"./CheckboxGroup-Dqq8TCYP.js";import{C as G}from"./Checkbox-CwMI3toy.js";import{T as t}from"./TextField-khbkedC2.js";import{S as l}from"./Select-hNK002C2.js";import{L as p}from"./ListBoxItem-4HCAXVvg.js";import{B as a}from"./Button-ClirsJfj.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-By5vzM2y.js";import"./utils-jft35r8I.js";import"./clsx-B-dksMZM.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./clsx-Ciqy0D92.js";import"./Group-DtXYA5qI.js";import"./FieldError-B_RQwvpG.js";import"./Text-Dg63mXaz.js";import"./Text-eFe150r9.js";import"./Button-C9b-TJtb.js";import"./Hidden-Crg89ChB.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./SelectionIndicator-DfY4UXyG.js";import"./useField-76ZmfiRI.js";import"./VisuallyHidden-DBHrI_B7.js";import"./useControlledState-CkptqhP6.js";import"./Label-BOYaDa7i.js";import"./Dialog-DxK-ww5T.js";import"./RSPContexts-Csylolnc.js";import"./OverlayArrow-LoDtC1od.js";import"./useResizeObserver-DC3G56zM.js";import"./Collection-DjJ2m9zo.js";import"./index-4pgU1s_J.js";import"./Separator-2LMpIno4.js";import"./SelectionManager-0LynmnvR.js";import"./useEvent-Dr-0pueP.js";import"./scrollIntoView-DUeHV5Vd.js";import"./useDescription-Da3_CYtm.js";import"./ListKeyboardDelegate-C2orpyom.js";import"./PressResponder-DFsO8vzI.js";import"./useLocalizedStringFormatter-BHhCUzn7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BT6WLBFH.js";import"./getScrollParent-DwRJEpBB.js";import"./ModalOverlay-JVd6uyAy.js";import"./x-BkZO3SMW.js";import"./createLucideIcon-B9xTeaix.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./Heading-D83dPF1d.js";import"./info-CCS-HkAt.js";import"./Popover-BiEZys4z.js";import"./check-9kvzkp9q.js";import"./useToggleState-BUI9gasn.js";import"./TextFieldBase-B307V2VN.js";import"./Input-_7XqZgB0.js";import"./useTextField-HwJ_gv6h.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BLlncj7V.js";import"./DragAndDrop-D2ajgVFY.js";import"./inertValue-izSROIxw.js";import"./useListState-qR7cJUrY.js";import"./TagGroup-BznxYpYK.js";import"./useHighlightSelectionDescription-DZGCAKpj.js";import"./useUpdateEffect-B1ex9kdD.js";import"./useHasTabbableChild-DHwJrSNX.js";import"./chevron-down-B50PfioO.js";import"./Virtualizer-DajH2H0Z.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
