import{j as e}from"./iframe-MGdNAUMz.js";import{$ as c}from"./Form-DYj9-0zO.js";import{G as d}from"./Grid-RQK5GSHA.js";import{G as i}from"./GridItem-zmA6yPZd.js";import{T as t}from"./TextField-D_DDZL7S.js";import{S as l}from"./Select-DFtJLuHt.js";import{B as a}from"./Button-f3B-7Wnz.js";import{R as x,a as u}from"./Radio-Bv1fhsTF.js";import{C as I}from"./CheckboxGroup-BI2IK9VM.js";import{C as G}from"./Checkbox-GcOWnpGo.js";import{L as p}from"./ListBoxItem-JzTI_cMb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-yAZ9U3h-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-3gszShr7.js";import"./useFocusRing-9yuQWUp-.js";import"./index-CFMDqy5s.js";import"./index-DxYbJLyO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-q-LowQmx.js";import"./TextField-BlG-YPTw.js";import"./FieldError-zekZnl7-.js";import"./Text-DFJny9No.js";import"./Text-D8P4tHEb.js";import"./RSPContexts-DhTziygn.js";import"./Group-D5jgAVDM.js";import"./Input-CrISesir.js";import"./Hidden-DaKSv-Rd.js";import"./Button-BGSDIYD6.js";import"./useLabels-CYaM2JW7.js";import"./useButton-CKkRVWTa.js";import"./useTextField-BtACyCdQ.js";import"./useControlledState-piNu0BKM.js";import"./useField-BA29SgkZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-YJ2AWegw.js";import"./Dialog-D-j4KZpo.js";import"./OverlayArrow-BKt-WXKT.js";import"./useResizeObserver-DZuuQAtg.js";import"./Collection-CSnOiKVp.js";import"./index-DeKZwJvt.js";import"./Separator-W8ef00fQ.js";import"./SelectionManager-Dn_uWwP9.js";import"./useEvent-h_n_ZdPT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8cUfzPMl.js";import"./useDescription-D7Bwelde.js";import"./ListKeyboardDelegate-Cw5ZXmnD.js";import"./PressResponder-FJ8ouTMy.js";import"./useLocalizedStringFormatter-CMEEk3KL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bn86Sij2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BK3tSjRA.js";import"./x-BWyXqCEY.js";import"./createLucideIcon-CrP5_4Rr.js";import"./useLocalizedStringFormatter-CcU_ael6.js";import"./Heading-D--hORfB.js";import"./info-DX2nrYA-.js";import"./Popover-COiZ5hws.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DIxm089C.js";import"./DragAndDrop-6HyHeRIP.js";import"./inertValue-_XGtEjo7.js";import"./useListState-_eBFk_TT.js";import"./Tag-CtYDcxZC.js";import"./useHighlightSelectionDescription-D1VEJ3cT.js";import"./useUpdateEffect-B1QgVH_u.js";import"./useHasTabbableChild-Ban56eNv.js";import"./chevron-down-0ALFbq-9.js";import"./Button.module-Co5e5YHp.js";import"./check-DbMubpZC.js";import"./useToggleState-BWzKJqZ3.js";import"./Virtualizer-CSD6pYIQ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
