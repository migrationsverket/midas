import{j as e}from"./iframe-CnjefUD1.js";import{$ as c}from"./Form-l56fnhcu.js";import{G as d}from"./Grid-CdQl_cgK.js";import{G as i}from"./GridItem-Cub-u6rq.js";import{T as t}from"./TextField-oYX8MlSt.js";import{S as l}from"./Select-DhpBFR4D.js";import{B as a}from"./Button-CAOAFMpi.js";import{R as x,a as u}from"./Radio-C_b52UVj.js";import{C as I}from"./CheckboxGroup-DNKFSNAT.js";import{C as G}from"./Checkbox-CbNz5o4i.js";import{L as p}from"./ListBoxItem-B6ZEqbDg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D37LYN_z.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-InwWLwT5.js";import"./useFocusRing-OpxO3A8k.js";import"./index-CEoM9FY4.js";import"./index-C0k8iZuD.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DYIj1Ibz.js";import"./TextField-DzXxzKDz.js";import"./FieldError-DESxxTZt.js";import"./Text-D8shfVXj.js";import"./Text-DzNIEZYv.js";import"./RSPContexts-Drdjh-bQ.js";import"./Group-Bl9zcpaY.js";import"./Input-Bp4_DxRl.js";import"./Hidden-C9ODNoG7.js";import"./Button-BHfV4bzr.js";import"./useLabels-D_5lY230.js";import"./useButton-D49m94PX.js";import"./useTextField-DaAs0YZa.js";import"./useControlledState-uJdyG-cB.js";import"./useField-CgKeeixV.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cplly0S2.js";import"./Dialog-CIpig0YL.js";import"./OverlayArrow-DbET9W3E.js";import"./useResizeObserver-CIwnd7w9.js";import"./Collection-mgFKN5JO.js";import"./index-DZcN7hJE.js";import"./Separator-FG-AN-IY.js";import"./SelectionManager-gc4W3cAI.js";import"./useEvent-BX-F18G_.js";import"./scrollIntoView-B-yMeDWI.js";import"./SelectionIndicator-BVv602uL.js";import"./useDescription-BogjwYXB.js";import"./ListKeyboardDelegate-Cl2aSTuo.js";import"./PressResponder-DgMOcqAP.js";import"./useLocalizedStringFormatter-CcNy5K9j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CzOKCRh2.js";import"./VisuallyHidden-C-qiHPSr.js";import"./x-CaOMZwEa.js";import"./createLucideIcon-CeKlyRFp.js";import"./useLocalizedStringFormatter-BV3whyUg.js";import"./Heading-ByEVGbfl.js";import"./info-D5ZVz8XJ.js";import"./Popover-BH3_Dewm.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CYt4G-Pp.js";import"./DragAndDrop-B09aIuEK.js";import"./inertValue-CB0N2Gru.js";import"./useListState-DZtJ_MM9.js";import"./Tag-BXikmHre.js";import"./useHighlightSelectionDescription-DfLLNkhV.js";import"./useUpdateEffect-DHVs2L3Q.js";import"./useHasTabbableChild-D8I-8GwN.js";import"./chevron-down-CzgKA3R3.js";import"./Button.module-Co5e5YHp.js";import"./check-CRiKrQ2J.js";import"./useToggleState-Or4Y8pNh.js";import"./Virtualizer-DtC9vZtW.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
