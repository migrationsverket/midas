import{j as e}from"./iframe-DlRnEK4k.js";import{$ as c}from"./Form-CaNldvlJ.js";import{G as d}from"./Grid-f1dFlbMf.js";import{G as i}from"./GridItem-B8s3DMJ_.js";import{T as t}from"./TextField-W6Lo_4C6.js";import{S as l}from"./Select-DVr2jD4u.js";import{B as a}from"./Button-DGJbzUQa.js";import{R as x,a as u}from"./Radio-De-nGJmU.js";import{C as I}from"./CheckboxGroup-DdgoBSyA.js";import{C as G}from"./Checkbox-DTSOUPE4.js";import{L as p}from"./ListBoxItem-CtOdZceB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D3WMCmhi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-u37mcFJ1.js";import"./useFocusRing-CtQv74MI.js";import"./index-jCSvyxP9.js";import"./index-DJo1NE8t.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CyW5fRk7.js";import"./TextField-qsWrc1O7.js";import"./FieldError-ByTImbG0.js";import"./Text-DzhCPMX9.js";import"./Text-pxXmd_kg.js";import"./RSPContexts-DpGYM7nP.js";import"./Group-D7MN01lK.js";import"./Input-b40avRsE.js";import"./Hidden-Xdwaye0t.js";import"./Button-BVP44qrj.js";import"./useLabels-CqwaHALx.js";import"./useButton-BqQtdQbm.js";import"./useTextField-BVqKXUSF.js";import"./useControlledState-RvjSpX79.js";import"./useField-D4h3c7yb.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-R2IIEnKa.js";import"./Dialog-Gebrl8eh.js";import"./OverlayArrow-Ch9hUsTZ.js";import"./useResizeObserver-Dy4Ea3jU.js";import"./Collection-CHONR_t1.js";import"./index-BwMI2uWM.js";import"./Separator-B9uyh5hr.js";import"./SelectionManager-QKHzDHyN.js";import"./useEvent-BxrOLZT_.js";import"./scrollIntoView-CMHF9MTr.js";import"./SelectionIndicator-htCv98XE.js";import"./useDescription-DJXZM-kB.js";import"./ListKeyboardDelegate-FXAaReNh.js";import"./PressResponder-C4Udsr3r.js";import"./useLocalizedStringFormatter-DyH7cYn1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CN7yZ-C_.js";import"./VisuallyHidden-ifyuuxDl.js";import"./useLocalizedStringFormatter-CMmOeTrS.js";import"./x-CreUOsvr.js";import"./createLucideIcon-BrQGCJQG.js";import"./Heading-wCvU4ISl.js";import"./info-C5nZ4AgA.js";import"./Popover-DywvHrZA.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ZGhaDncg.js";import"./DragAndDrop-C_5BfUWK.js";import"./inertValue-CsQnJMXD.js";import"./useListState-DJVS89zQ.js";import"./Tag-D8W77mAM.js";import"./useHighlightSelectionDescription-Bv25VF5z.js";import"./useUpdateEffect-BXxm-XGh.js";import"./useHasTabbableChild-BtNgyB2m.js";import"./chevron-down-CZ2wRQ6U.js";import"./Button.module-CtQ1deO8.js";import"./check-_XeIRYVL.js";import"./useToggleState-C0YvyO20.js";import"./Virtualizer-CA4Rt7_e.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
