import{j as e}from"./iframe-DdBf1SRL.js";import{c}from"./Form-BnkXR6RV.js";import{G as d}from"./Grid-Crn7BQOw.js";import{G as i}from"./GridItem-8PMghgw5.js";import{a as x,R as u}from"./Radio-BpT1JiB7.js";import{C as I}from"./CheckboxGroup-BPLPnNMl.js";import{C as G}from"./Checkbox-BxNoQrsX.js";import{T as t}from"./TextField-DcKoAg4Y.js";import{S as l}from"./Select-CfVbqn3c.js";import{L as p}from"./ListBoxItem-rq6qLhBm.js";import{B as a}from"./Button-BcNKuXh9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B7kbWjnk.js";import"./utils-DMchxVzX.js";import"./clsx-B-dksMZM.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./clsx-Ciqy0D92.js";import"./Group-Dz-A39lc.js";import"./FieldError-CxsQvr-l.js";import"./Text-BubyCo8k.js";import"./Text-Crsqw0eJ.js";import"./Button-DfVfuE86.js";import"./Hidden-DnCBwxQo.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./SelectionIndicator-CuhYxI4d.js";import"./useField-B-UKPEcq.js";import"./VisuallyHidden-TAipgByj.js";import"./useControlledState-aSEVnCiN.js";import"./Label-B60R5RDz.js";import"./Dialog-BZoFiE8g.js";import"./RSPContexts-DeLkFkii.js";import"./OverlayArrow-BVMBp9Sx.js";import"./useResizeObserver-Vt9UesdB.js";import"./Collection-iaZXBrxK.js";import"./index-DpcT8N6d.js";import"./Separator-Cuqf8mp-.js";import"./SelectionManager-DWXdlFy8.js";import"./useEvent-DSMuUAnY.js";import"./scrollIntoView-BZzoMKS8.js";import"./useDescription-zrMNjBsf.js";import"./ListKeyboardDelegate-B9CnOcQ4.js";import"./PressResponder-Dw1Tvwi2.js";import"./useLocalizedStringFormatter-B5aKiSMw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C5_-IwUt.js";import"./getScrollParent-FpAGmNqP.js";import"./ModalOverlay-TV_D2hAq.js";import"./x-DQUfmUsq.js";import"./createLucideIcon-DMjdayIV.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./Heading-0gJfGgeH.js";import"./info-mMeset4C.js";import"./Popover-wLY7u0qX.js";import"./check-D7j61AyI.js";import"./useToggleState-CmagXPQ9.js";import"./TextFieldBase-DpqHSF2y.js";import"./Input-BZTpPI0z.js";import"./useTextField-BwJPM4sj.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-2MpU3wze.js";import"./DragAndDrop-DvfPlL7b.js";import"./inertValue-zbQiu2nb.js";import"./useListState-B2fTgGtx.js";import"./TagGroup-BMaWczWe.js";import"./useHighlightSelectionDescription-dqhteKYS.js";import"./useUpdateEffect-BPY-XS72.js";import"./useHasTabbableChild-_fmKLD_g.js";import"./chevron-down-Co_U4qmx.js";import"./Virtualizer-CgbhuSWc.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
