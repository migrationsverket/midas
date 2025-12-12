import{j as e}from"./iframe-CyOFsxEw.js";import{$ as c}from"./Form-BggWoa1O.js";import{G as d}from"./Grid-CtIUlBjQ.js";import{G as i}from"./GridItem-BUwEvdxp.js";import{T as t}from"./TextField-C-6QfRC6.js";import{S as l}from"./Select-XNluuMuk.js";import{B as a}from"./Button-DgFwcK1w.js";import{R as x,a as u}from"./Radio-uExDFhLi.js";import{C as I}from"./CheckboxGroup-Ba_WcgX3.js";import{C as G}from"./Checkbox-CuwIvN1R.js";import{L as p}from"./ListBoxItem-BEJ9x_Cg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GLgclvkH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ClIr8owc.js";import"./useFocusRing-D8aNkt7i.js";import"./index-CU2F3nqQ.js";import"./index-Cbz2sGVE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BDb_01cd.js";import"./TextField-JQ0M6DoV.js";import"./FieldError-C2jTShGg.js";import"./Text-CmPsAR7I.js";import"./Text-DwafAf6m.js";import"./RSPContexts-VrOQvCF9.js";import"./Group-Cp3cFe9_.js";import"./Input-DqUPOTOD.js";import"./Hidden-cFLLFl7x.js";import"./Button-Da0V7IB-.js";import"./useLabels-FLdwxISV.js";import"./useButton-DTZgQVqL.js";import"./useTextField-BVveQGGs.js";import"./useControlledState-BKJPrLB_.js";import"./useField-BVPNG5p2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DI6kJdUh.js";import"./Dialog-BHwed2ut.js";import"./OverlayArrow-BZRjbVIo.js";import"./useResizeObserver-Di6ymx9K.js";import"./Collection-D_daHII4.js";import"./index-C2G_04sS.js";import"./Separator-Du1NvCMN.js";import"./SelectionManager-BR4g4F9k.js";import"./useEvent-YyVnDDf-.js";import"./scrollIntoView-Eu14nWFE.js";import"./SelectionIndicator-DrWGbLYS.js";import"./useDescription-Dtypy5AE.js";import"./ListKeyboardDelegate-Dg1S5bcK.js";import"./PressResponder-CimXxjpH.js";import"./useLocalizedStringFormatter-CJ9ubZdj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B_Ain5hv.js";import"./VisuallyHidden-DCfUdHTK.js";import"./x-DrdwkuGC.js";import"./createLucideIcon-CgjV2Kgp.js";import"./useLocalizedStringFormatter-BB5TyvbC.js";import"./Heading-BE1H7Sh7.js";import"./info-C9yHlQr-.js";import"./Popover-Da_6dnxH.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CJGGil9R.js";import"./DragAndDrop--rS06O9h.js";import"./inertValue-B5NCTCiV.js";import"./useListState-VeitOrLV.js";import"./Tag-B8BK0PIU.js";import"./useHighlightSelectionDescription-BMjzwvPz.js";import"./useUpdateEffect-DlKJoQs8.js";import"./useHasTabbableChild-DjXPHnSd.js";import"./chevron-down-DfA6GgN3.js";import"./Button.module-Co5e5YHp.js";import"./check-D4HxnEUf.js";import"./useToggleState-E1g-UcKA.js";import"./Virtualizer-D3RiMtHT.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
