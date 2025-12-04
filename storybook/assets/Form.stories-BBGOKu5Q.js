import{j as e}from"./iframe-BnvIDWhX.js";import{$ as c}from"./Form-CksB7z6J.js";import{G as d}from"./Grid-C0tvO8sE.js";import{G as i}from"./GridItem-BHFtuwmr.js";import{T as t}from"./TextField-Bvpi8cpq.js";import{S as l}from"./Select-B9OqgCkE.js";import{B as a}from"./Button-DqvzVHOE.js";import{R as x,a as u}from"./Radio-hpwF1y4g.js";import{C as I}from"./CheckboxGroup-CBSBcyp3.js";import{C as G}from"./Checkbox-BPMuA83K.js";import{L as p}from"./ListBoxItem-Dd0aYvT0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvQhf5aw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DldjmbqA.js";import"./useFocusRing-kt0fM5Eg.js";import"./index-DZ5e4qNw.js";import"./index-BBb9LXyW.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DPF0yuXk.js";import"./TextField-CZbqpI4x.js";import"./FieldError-BXYDl_68.js";import"./Text-CcU36hjn.js";import"./Text-C7YaW3xP.js";import"./RSPContexts-p_3PQZMd.js";import"./Group-UDO2qmDm.js";import"./Input-CxXqC4v8.js";import"./Hidden-SpBz5CyG.js";import"./Button-2vHqoAit.js";import"./useLabels-C7yBIXeo.js";import"./useButton-Dxyw1gnX.js";import"./useTextField-DK2zy1S8.js";import"./useControlledState-DHwPIbAN.js";import"./useField-D9ELBiEA.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ASHlLgAC.js";import"./Dialog-BT7KHO7D.js";import"./OverlayArrow-gsPDqO15.js";import"./useResizeObserver-DtWdT9hl.js";import"./Collection-BJ4Qy3kN.js";import"./index-Bd26Brwk.js";import"./Separator-DoOZOSYN.js";import"./SelectionManager-DrNCUxIW.js";import"./useEvent-CctKA4oo.js";import"./scrollIntoView-DcjaWzfx.js";import"./SelectionIndicator-eOyvRYaz.js";import"./useDescription-BRbn5Aqy.js";import"./ListKeyboardDelegate-DDm69ZdR.js";import"./PressResponder-CsH5riWB.js";import"./useLocalizedStringFormatter-CQGgYv2z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CPzYdZ1O.js";import"./VisuallyHidden-BHMQPsJv.js";import"./x-tgwQ7WbQ.js";import"./createLucideIcon-CfqM0T4F.js";import"./useLocalizedStringFormatter-BCUIru9v.js";import"./Heading-bqih8IZA.js";import"./info-DOymIFIY.js";import"./Popover-CT_Naab_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DCxav22t.js";import"./DragAndDrop-VySr7Hho.js";import"./inertValue-Ds2BsF6Q.js";import"./useListState-C6ZzU0BS.js";import"./Tag-B7VUTOPx.js";import"./useHighlightSelectionDescription-jrBfdXaS.js";import"./useUpdateEffect-DRUWwAsp.js";import"./useHasTabbableChild-BxkjhcHj.js";import"./chevron-down-DJYMNenX.js";import"./Button.module-Co5e5YHp.js";import"./check-w0i3Zam4.js";import"./useToggleState-CAdGn1wn.js";import"./Virtualizer-BcK8TjNX.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
