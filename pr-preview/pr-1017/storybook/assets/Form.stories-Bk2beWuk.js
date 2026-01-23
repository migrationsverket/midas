import{j as e}from"./iframe-B5mKUI4c.js";import{$ as c}from"./Form-fo64gJbw.js";import{G as d}from"./Grid-DT5Wlx8u.js";import{G as i}from"./GridItem-CjXM7FK4.js";import{T as t}from"./TextField-C-oHO6vU.js";import{S as l}from"./Select-B2VpdyLI.js";import{B as a}from"./Button-DdQrsI7w.js";import{R as x,a as u}from"./Radio-B2luOFGN.js";import{C as I}from"./CheckboxGroup-PjPU0O0P.js";import{C as G}from"./Checkbox-D-02jh5o.js";import{L as p}from"./ListBoxItem-Qquu52cm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DeW7LaO1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D5XvDLkr.js";import"./useFocusRing-CgbRETJq.js";import"./index-BhZP_iQU.js";import"./index-4ahidsI-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bd4aUsQi.js";import"./TextField-SXvqvKg7.js";import"./FieldError-CWRNW1G1.js";import"./Text-BYCbsMCs.js";import"./Text-B1l_WlEL.js";import"./RSPContexts-hkEluX4Q.js";import"./Group-DWJAzhU4.js";import"./Input-qyS3RiSD.js";import"./Hidden-CSsTijhC.js";import"./Button-BrTPVwzK.js";import"./useLabels-B2xIaWSz.js";import"./useButton-BO8k0dou.js";import"./useTextField-BYZ5nwm1.js";import"./useControlledState-xvk7L9VL.js";import"./useField-B5R57QYN.js";import"./TextField.module-1fNSVGjT.js";import"./Label--rM9mR8h.js";import"./Dialog-GsIV9oY6.js";import"./OverlayArrow-D2-mpB-W.js";import"./useResizeObserver-C41Yibf-.js";import"./Collection-BWT2TfPW.js";import"./index-DU05F0qm.js";import"./Separator-CZyYGJp1.js";import"./SelectionManager-BQ7PwXNj.js";import"./useEvent-Bfj_pgkR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DkbBQGb2.js";import"./useDescription-DtjJIqI8.js";import"./ListKeyboardDelegate-rL_uqiBQ.js";import"./PressResponder-PkRvg21X.js";import"./useLocalizedStringFormatter-9u2UdEi1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKzpCpBP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Xt4BPEfK.js";import"./x-CzqSHOZc.js";import"./createLucideIcon-ByiINced.js";import"./useLocalizedStringFormatter-DgKQ4iI2.js";import"./Heading-BnvherGp.js";import"./info-z8YWGbZA.js";import"./Popover-Bmqihs8u.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BT7n1jOA.js";import"./DragAndDrop-BbDKD0f8.js";import"./inertValue-CagF1j6Z.js";import"./useListState-Be5CYRhz.js";import"./Tag-Dn8XQjUx.js";import"./useHighlightSelectionDescription-BkaIr2cu.js";import"./useUpdateEffect-D3zzAlDo.js";import"./useHasTabbableChild-C5hBnGjj.js";import"./chevron-down-BmNN4KEk.js";import"./Button.module-Co5e5YHp.js";import"./check-CZ-ZEEY-.js";import"./useToggleState-Ccpw37c7.js";import"./Virtualizer-CGZ66n0a.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
