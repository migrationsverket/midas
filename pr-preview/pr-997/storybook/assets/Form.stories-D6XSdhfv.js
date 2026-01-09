import{j as e}from"./iframe--YiVc9hQ.js";import{$ as c}from"./Form-DqMg5srB.js";import{G as d}from"./Grid-A5BIS8iy.js";import{G as i}from"./GridItem-Bjnybthh.js";import{T as t}from"./TextField-4fixs1Mh.js";import{S as l}from"./Select-D65yCN8w.js";import{B as a}from"./Button-UFPEZg__.js";import{R as x,a as u}from"./Radio-DhOBJzdF.js";import{C as I}from"./CheckboxGroup-DoKc35t2.js";import{C as G}from"./Checkbox-9fg6WGo2.js";import{L as p}from"./ListBoxItem-mKQogoNj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CpTnsnHV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CQ7W6iFw.js";import"./useFocusRing-0ty734hP.js";import"./index-JKE8F4U8.js";import"./index-BL2jGLxX.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CisQul9s.js";import"./TextField-D2jbUiyL.js";import"./FieldError-BTW40C7o.js";import"./Text-o29tJk3p.js";import"./Text-CpCRGjDE.js";import"./RSPContexts-Cj5AcZ5v.js";import"./Group-DMFqgC2S.js";import"./Input-NUq3casV.js";import"./Hidden-BTZxWKRt.js";import"./Button-DG5CDtQI.js";import"./useLabels-BJE1cm7E.js";import"./useButton-jtZkJpn4.js";import"./useTextField-CSTOg0bT.js";import"./useControlledState-C3lB_-hB.js";import"./useField-Bek4DV6E.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BxsASF-G.js";import"./Dialog-BttT1W7O.js";import"./OverlayArrow-DP9vaZ_M.js";import"./useResizeObserver-B29bVLOX.js";import"./Collection-xD8Y3ccY.js";import"./index-CbtIlzo-.js";import"./Separator-C4RUysbw.js";import"./SelectionManager-Bh9JhaZY.js";import"./useEvent-foWgZimj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJs-u6TU.js";import"./useDescription-W6MpaIcO.js";import"./ListKeyboardDelegate-CqcuA2vR.js";import"./PressResponder-vGzMUI1V.js";import"./useLocalizedStringFormatter-Dw3D2Uxn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQFHdY9W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-oIx4p_CA.js";import"./x-DoZor33n.js";import"./createLucideIcon-MgWQY606.js";import"./useLocalizedStringFormatter-39Qfkypc.js";import"./Heading-B6Ybwa57.js";import"./info-BFgZkJXj.js";import"./Popover-CVOrbPeG.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjOjSFq4.js";import"./DragAndDrop-D-2azUgx.js";import"./inertValue-DgJoPVPe.js";import"./useListState-CKHHUUvC.js";import"./Tag-DH--2bdI.js";import"./useHighlightSelectionDescription-698gGKnp.js";import"./useUpdateEffect-BA2gArDX.js";import"./useHasTabbableChild-ctzB2EoO.js";import"./chevron-down-Ctc7imJP.js";import"./Button.module-Co5e5YHp.js";import"./check-B0FQIl44.js";import"./useToggleState-lbaTiQXx.js";import"./Virtualizer-DapodlW3.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
