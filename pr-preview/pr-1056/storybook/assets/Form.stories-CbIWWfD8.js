import{j as e}from"./iframe-DJUtdHwV.js";import{$ as c}from"./Form-Bx3qbLf4.js";import{G as d}from"./Grid-2_g4y7Rn.js";import{G as i}from"./GridItem-BkO5fTBa.js";import{a as x,R as u}from"./Radio-DcP2dHl_.js";import{C as I}from"./CheckboxGroup-Bk2dIJ3e.js";import{C as G}from"./Checkbox-DpWjo_MN.js";import{T as t}from"./TextField-CYpOt1Tq.js";import{S as l}from"./Select-BQrBt78X.js";import{L as p}from"./ListBoxItem-BUmwZK9h.js";import{B as a}from"./Button-CThTpwQ6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D4RE6qhK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DRqFyOxo.js";import"./useFocusRing-C5U0CiHo.js";import"./index-CVKq7ZZT.js";import"./index-Ha_8AofU.js";import"./clsx-Ciqy0D92.js";import"./Group-BUo-NuQG.js";import"./FieldError-C9oMwrfJ.js";import"./Text-B58uuGYq.js";import"./Text-Dl70Vupn.js";import"./Button-bQvo04EJ.js";import"./Hidden-DPRRZP9g.js";import"./useLabels-Duan9ykz.js";import"./useButton-D3H5VeWz.js";import"./SelectionIndicator-D3PmNYx2.js";import"./useField-0I64IgUK.js";import"./VisuallyHidden-m39w7boQ.js";import"./useControlledState-C1jOx-dc.js";import"./Label-BcprkH4d.js";import"./Dialog-DQe-Gfpg.js";import"./RSPContexts-CeL7Ybna.js";import"./OverlayArrow-CDCCcTTD.js";import"./useResizeObserver-DPB_SUWz.js";import"./Collection-DaGi1ZdJ.js";import"./index-BSsOzAdI.js";import"./Separator-CRJE82p_.js";import"./SelectionManager-gpdXDHRv.js";import"./useEvent-T3MosaLJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-nXINSnLi.js";import"./ListKeyboardDelegate-65Ez9XKB.js";import"./PressResponder-BiRPbGEB.js";import"./useLocalizedStringFormatter-W5YzKkQs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Do24X5lR.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BHtKcay4.js";import"./createLucideIcon-SxhoPmH3.js";import"./useLocalizedStringFormatter-5gvZJBEc.js";import"./Heading-DL6t5x4O.js";import"./info-DBLxQG3L.js";import"./Popover-CNhN5vuc.js";import"./check-D-TOVba6.js";import"./useToggleState-CwtW0qhg.js";import"./TextFieldBase-ClvALru8.js";import"./TextField-Dez3oB2V.js";import"./Input-C0MS31TD.js";import"./useTextField-DI7yS5us.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-99neJYXr.js";import"./DragAndDrop-CfOnTYjv.js";import"./inertValue-mwKAUJtz.js";import"./useListState-W0ckvMyc.js";import"./Tag-Bhi6Q5H5.js";import"./useHighlightSelectionDescription-DS3k7jZZ.js";import"./useUpdateEffect-C583A1uJ.js";import"./useHasTabbableChild-DjnxL4uk.js";import"./chevron-down-DKdh0976.js";import"./Virtualizer-CTNcAjiZ.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
