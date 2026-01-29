import{j as e}from"./iframe-CCE7bbwH.js";import{$ as c}from"./Form-DxWxZ3xE.js";import{G as d}from"./Grid-BYK5Lhdb.js";import{G as i}from"./GridItem-DmfHmvA7.js";import{T as t}from"./TextField-CVQ-Y2t9.js";import{S as l}from"./Select-hnzBnOqg.js";import{B as a}from"./Button-Dw3HUc-4.js";import{R as x,a as u}from"./Radio-RmgU6CdB.js";import{C as I}from"./CheckboxGroup-BJPcHypR.js";import{C as G}from"./Checkbox-CwTOygTn.js";import{L as p}from"./ListBoxItem-sRqHkFge.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVaE8NLk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cqln8SK2.js";import"./useFocusRing-COIr_sUJ.js";import"./index-Dp5GmYi7.js";import"./index-aGo1ZsQs.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BXWu640y.js";import"./TextField-BSzV4QJt.js";import"./FieldError-CyHhaVe9.js";import"./Text-DdG9vEac.js";import"./Text-CRHS6IkK.js";import"./RSPContexts-Cc7Msy4D.js";import"./Group-By0h_gUZ.js";import"./Input-Bgg2VV-c.js";import"./Hidden-D5Jk713G.js";import"./Button-lT9_7AJU.js";import"./useLabels-Dd7McQGF.js";import"./useButton-CI7aYhes.js";import"./useTextField-P-502Bm1.js";import"./useControlledState-DRIq_96A.js";import"./useField-DXX-h2WN.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DogWNTqP.js";import"./Dialog-PtRmFe2T.js";import"./OverlayArrow-DOPldFRC.js";import"./useResizeObserver-CVA3a0jT.js";import"./Collection-DLzY31xD.js";import"./index-DmIQK8yC.js";import"./Separator-DFseeV5i.js";import"./SelectionManager-CQ2i0OB5.js";import"./useEvent-O9CTpKHV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C6rJyLIB.js";import"./useDescription-BMgwLMUv.js";import"./ListKeyboardDelegate-CNikrRlR.js";import"./PressResponder-DEnmPFca.js";import"./useLocalizedStringFormatter-r_KtojUx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BFXFhG36.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPHyXCRO.js";import"./x-5WBMPsQp.js";import"./createLucideIcon-Dc7mzXcy.js";import"./useLocalizedStringFormatter-CRJLM8ja.js";import"./Heading-B9UX25UO.js";import"./info-DulROV-1.js";import"./Popover-CjxbSaN4.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BuWJkh0d.js";import"./DragAndDrop-Cg_i46oi.js";import"./inertValue-DFO7kr2O.js";import"./useListState-mH0NCSA4.js";import"./Tag-C7846m6-.js";import"./useHighlightSelectionDescription-CaSiUBDg.js";import"./useUpdateEffect-CdOXStOi.js";import"./useHasTabbableChild-Df2sy4Hk.js";import"./chevron-down-uz1DfQOn.js";import"./Button.module-Co5e5YHp.js";import"./check-DO0Po3XC.js";import"./useToggleState-B9j3SHLq.js";import"./Virtualizer-B9by-Jge.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
