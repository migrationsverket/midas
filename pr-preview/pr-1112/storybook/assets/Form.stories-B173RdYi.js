import{j as e}from"./iframe-QDSUgBpo.js";import{$ as c}from"./Form-BzmpAFOD.js";import{G as d}from"./Grid-wyTlPBc8.js";import{G as i}from"./GridItem-BRyGRxy2.js";import{a as x,R as u}from"./Radio-CAuCpx2s.js";import{C as I}from"./CheckboxGroup-CC_MWM1K.js";import{C as G}from"./Checkbox-Bduk3Pow.js";import{T as t}from"./TextField-DGSbL-8Z.js";import{S as l}from"./Select-CKkVuyEk.js";import{L as p}from"./ListBoxItem-abJXfUPh.js";import{B as a}from"./Button-B_32-CvO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvLern-H.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D9lbBzHN.js";import"./useFocusRing-DJFUjDnL.js";import"./index-BF2Mp0-C.js";import"./index-DczpGf_O.js";import"./clsx-Ciqy0D92.js";import"./Group-DyTv-GVR.js";import"./FieldError-BkvFLAiM.js";import"./Text-CvZZMQm8.js";import"./Text-DR2iN84k.js";import"./Button-C3ndRLHV.js";import"./Hidden-BN-CZ8Az.js";import"./useLabels-EtKw0NwM.js";import"./useButton-Ca39907a.js";import"./SelectionIndicator-BIhL9hvF.js";import"./useField-H3aLMADt.js";import"./VisuallyHidden-RUty4LXR.js";import"./useControlledState-0ntZUwbV.js";import"./Label-Dv1CZIiU.js";import"./Dialog-CthEDCHj.js";import"./RSPContexts-DdhSCSVx.js";import"./OverlayArrow-DgmubAk3.js";import"./useResizeObserver-SWq72swg.js";import"./Collection-D4C6-BXJ.js";import"./index-XRXkwlnM.js";import"./Separator-DzbLo0pW.js";import"./SelectionManager-CiUsdP4o.js";import"./useEvent-C8LuCS9K.js";import"./scrollIntoView-DWJeooee.js";import"./useDescription-tD4XjceD.js";import"./ListKeyboardDelegate-CQLphkwI.js";import"./PressResponder-q00a2t1V.js";import"./useLocalizedStringFormatter-BuFmuI1y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYiJMydF.js";import"./getScrollParent-CoiIkSSx.js";import"./x-DQSWlImf.js";import"./createLucideIcon-awWdQq2I.js";import"./useLocalizedStringFormatter-CpELJUen.js";import"./Heading-nnzh1k-l.js";import"./info-DRB6OBjd.js";import"./Popover-DfAxbr01.js";import"./check-D9QgD2Z9.js";import"./useToggleState-DuZR1H6d.js";import"./TextFieldBase-B5P56hEc.js";import"./Input-D8fuFGkD.js";import"./useTextField-DiPOIOEe.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CupRB00O.js";import"./DragAndDrop-DmWgXGK_.js";import"./inertValue-D9xz9yfp.js";import"./useListState-CuBxA5FI.js";import"./TagGroup-CWNrMEOy.js";import"./useHighlightSelectionDescription-CXDbMMIq.js";import"./useUpdateEffect-DYEoqaYh.js";import"./useHasTabbableChild-CvuIf2Pw.js";import"./chevron-down-Dy1FNHUM.js";import"./Virtualizer-hVmhxTxF.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
