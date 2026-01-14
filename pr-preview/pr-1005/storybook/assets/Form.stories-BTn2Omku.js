import{j as e}from"./iframe-BFGJdV-R.js";import{$ as c}from"./Form-kf_9l73i.js";import{G as d}from"./Grid-Co6B-RNZ.js";import{G as i}from"./GridItem-CiQkSk2h.js";import{T as t}from"./TextField-JPz3Mpdu.js";import{S as l}from"./Select-Drj0zX1u.js";import{B as a}from"./Button-CC7hJvPh.js";import{R as x,a as u}from"./Radio-4sKZYyY1.js";import{C as I}from"./CheckboxGroup-BgF2MszP.js";import{C as G}from"./Checkbox-BNAsbqXq.js";import{L as p}from"./ListBoxItem-9qFvaqj1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-kIk1YPQB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CfMbP7bF.js";import"./useFocusRing-DJbT0PkJ.js";import"./index-q0PAT9Q8.js";import"./index-Bgs2Im9U.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-e-zksaLf.js";import"./TextField-CM98IFcO.js";import"./FieldError-CQJGsK4z.js";import"./Text-BTml81CB.js";import"./Text-CkbWQQrW.js";import"./RSPContexts-CqmQDw7G.js";import"./Group-B23xqvDa.js";import"./Input-CrWTszU2.js";import"./Hidden-B0o1kVdW.js";import"./Button-a7m7Ei1w.js";import"./useLabels-ENg7mHVd.js";import"./useButton-DDbtau5_.js";import"./useTextField-BfmVvTo2.js";import"./useControlledState-BkGWyaov.js";import"./useField-BaW-osIe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C7zIDuhz.js";import"./Dialog-D_OZhhNV.js";import"./OverlayArrow-DEmWP7KY.js";import"./useResizeObserver-D1MRWwbK.js";import"./Collection-CiDKSw_z.js";import"./index-enciD4hB.js";import"./Separator-DriMwrCJ.js";import"./SelectionManager-oZcmF2nO.js";import"./useEvent-DQ79yaUH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D1ZBuTHZ.js";import"./useDescription-Bg2UYj8o.js";import"./ListKeyboardDelegate-4WXjROQx.js";import"./PressResponder-CR5O4XJJ.js";import"./useLocalizedStringFormatter-CssQMkou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXzkv8jy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C8v0qjRB.js";import"./x-B48QovPv.js";import"./createLucideIcon-C3uE9ls3.js";import"./useLocalizedStringFormatter-C_5YXSYz.js";import"./Heading-BO-wR8OH.js";import"./info-D5YW8ZDe.js";import"./Popover-CSbQ_ZIu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-2pEtbffp.js";import"./DragAndDrop-CY4YPtwv.js";import"./inertValue-qAsdnkeS.js";import"./useListState-BtgHwQUe.js";import"./Tag-CnN4cQQ_.js";import"./useHighlightSelectionDescription-DBScUOY-.js";import"./useUpdateEffect-_PRKGtbF.js";import"./useHasTabbableChild-C2Efrxi2.js";import"./chevron-down-BjqJkT4f.js";import"./Button.module-Co5e5YHp.js";import"./check-BxszO9_4.js";import"./useToggleState-ZfLL5xdz.js";import"./Virtualizer-CbUq2ooU.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
