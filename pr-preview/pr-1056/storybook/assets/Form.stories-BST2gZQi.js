import{j as e}from"./iframe-BUyds97o.js";import{$ as c}from"./Form-DKSqMjyW.js";import{G as d}from"./Grid-ChJQlJZW.js";import{G as i}from"./GridItem-Crd7GR_I.js";import{a as x,R as u}from"./Radio-D9Engsl8.js";import{C as I}from"./CheckboxGroup-BhnxCHaS.js";import{C as G}from"./Checkbox-CBzHAYj4.js";import{T as t}from"./TextField-DmS4MkIf.js";import{S as l}from"./Select-uvhdv8SV.js";import{L as p}from"./ListBoxItem-e3H3Cey-.js";import{B as a}from"./Button-N-WvUv-N.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BPu6xsrW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DsGu4ICd.js";import"./useFocusRing-Bm-8HNv9.js";import"./index-511sCdBp.js";import"./index-jhER429G.js";import"./clsx-Ciqy0D92.js";import"./Group-C0KollZQ.js";import"./FieldError-nzuM8Mkm.js";import"./Text-Dm1It-3G.js";import"./Text-DYJP5A76.js";import"./Button-HXR-7m9h.js";import"./Hidden-D-uqQF0z.js";import"./useLabels-BK_yTQcU.js";import"./useButton-v3-Q6iUD.js";import"./SelectionIndicator-BdhRxb3C.js";import"./useField-C5IKysth.js";import"./VisuallyHidden-bxnSUgOY.js";import"./useControlledState-Dk1B153b.js";import"./Label-9z55oe_h.js";import"./Dialog-BruVrcEm.js";import"./RSPContexts-B3kcM3sq.js";import"./OverlayArrow-Ba0W7a83.js";import"./useResizeObserver-Dk-yO2oS.js";import"./Collection-0h-PKilE.js";import"./index-CBtcg-XG.js";import"./Separator-nYCPhiEm.js";import"./SelectionManager-DAuT0Dm6.js";import"./useEvent-CIz6tOnB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BQAUwCoM.js";import"./ListKeyboardDelegate-DMbdK5-n.js";import"./PressResponder-Cbz_cq3p.js";import"./useLocalizedStringFormatter-DVo_dtBE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIC-pSZl.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-D7YsntyJ.js";import"./createLucideIcon-iD7jktQ6.js";import"./useLocalizedStringFormatter-C_jtq6xa.js";import"./Heading-eSq5c7xp.js";import"./info-BtAcpWtw.js";import"./Popover-BoQpzM8u.js";import"./check-BkVnLs9U.js";import"./useToggleState-C7hVXO0R.js";import"./TextFieldBase-DzOnIBAx.js";import"./TextField-DDF5Fehf.js";import"./Input-B06m_n44.js";import"./useTextField-C9N0NVGh.js";import"./TextField.module-BE9Ip_bu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CgNOWwPy.js";import"./DragAndDrop-BJ1ERuzN.js";import"./inertValue-E5_y9qi2.js";import"./useListState-CGFpJNlA.js";import"./Tag-DLKKCyEc.js";import"./useHighlightSelectionDescription-CZ656X4t.js";import"./useUpdateEffect-Bye21iy_.js";import"./useHasTabbableChild-Cpu7HCBc.js";import"./chevron-down-D0CImYtQ.js";import"./Virtualizer-D7XgNQah.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
