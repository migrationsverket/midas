import{j as e}from"./iframe-5OPxOFOo.js";import{$ as c}from"./Form-CrU0CZmU.js";import{G as d}from"./Grid-Dogn5MZF.js";import{G as i}from"./GridItem-Dg5Qm0f_.js";import{T as t}from"./TextField-CLgyKBGG.js";import{S as l}from"./Select-DP3wdo4M.js";import{B as a}from"./Button-CZG4l204.js";import{R as x,a as u}from"./Radio-C-PW_RR_.js";import{C as I}from"./CheckboxGroup-Yt677mEY.js";import{C as G}from"./Checkbox-DBMowzxx.js";import{L as p}from"./ListBoxItem-D0XFWr7b.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-y7VQpXmV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bc1me9n6.js";import"./useFocusRing-YAhHe-vS.js";import"./index-Bl-U2zRt.js";import"./index--CP_AI-C.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BaQj4rfv.js";import"./TextField-mtx0fyLN.js";import"./FieldError-DsFnT5cH.js";import"./Text-LE0QZyiT.js";import"./Text-DJ8ddDqj.js";import"./RSPContexts-Bvl2qDvi.js";import"./Group-Dz3qv3v1.js";import"./Input-DDF2Yccy.js";import"./Hidden-B8S2zPTS.js";import"./Button-DwYUQnyK.js";import"./useLabels-DFrgstvf.js";import"./useButton-DEtSmmrP.js";import"./useTextField-D3hRTkk3.js";import"./useControlledState-C3eWgmLl.js";import"./useField-B5Gn1WPy.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CPJGnTQu.js";import"./Dialog-C2kRLA1K.js";import"./OverlayArrow-CB3yFPwQ.js";import"./useResizeObserver-BdtodvEi.js";import"./Collection-DrYOgb_L.js";import"./index-Bhd8KZ-L.js";import"./Separator-CnjFkCy-.js";import"./SelectionManager-Byjjl2Ny.js";import"./useEvent-Dz5VVAtu.js";import"./scrollIntoView-BziE6UoW.js";import"./SelectionIndicator-org_szYd.js";import"./useDescription-BnvkbMBx.js";import"./ListKeyboardDelegate-g1kRYTEr.js";import"./PressResponder-CTBn48Ct.js";import"./useLocalizedStringFormatter-CJrXU8gl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-ClkZa6SK.js";import"./VisuallyHidden-D4M_6Oa3.js";import"./useLocalizedStringFormatter-Butfipwt.js";import"./x-Dh9h_nLx.js";import"./createLucideIcon-DTp8xoi7.js";import"./Heading-DysyouUu.js";import"./info-CHVIPInP.js";import"./Popover-BKLrGn4p.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DR05ER_4.js";import"./DragAndDrop-BhM2ycky.js";import"./inertValue-dqpMj049.js";import"./useListState-Dgddf9YA.js";import"./Tag-tx3_h9AS.js";import"./useHighlightSelectionDescription-DYfo0oo3.js";import"./useUpdateEffect-DU85q2R3.js";import"./useHasTabbableChild-DGKSBThT.js";import"./chevron-down-BZee7ftB.js";import"./Button.module-CtQ1deO8.js";import"./check-Cp8Nn04o.js";import"./useToggleState-C5CrrzM6.js";import"./Virtualizer-4yw6BZ5D.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
