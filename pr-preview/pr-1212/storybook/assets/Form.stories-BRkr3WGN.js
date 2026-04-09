import{j as e}from"./iframe-CKFMuO9m.js";import{c}from"./Form-CIVuJeWD.js";import{G as d}from"./Grid-CFLYypCE.js";import{G as i}from"./GridItem-Cj6lf_9w.js";import{a as x,R as u}from"./Radio-VG-MhXPJ.js";import{C as I}from"./CheckboxGroup-B2ijf_b0.js";import{C as G}from"./Checkbox-CFVdNKYx.js";import{T as t}from"./TextField-D-xn8tw-.js";import{S as l}from"./Select-8iDltgh9.js";import{L as p}from"./ListBoxItem-DzGp2X9i.js";import{B as a}from"./Button-DCc3RCFi.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-yfimCeup.js";import"./utils-D5GKgKLw.js";import"./clsx-B-dksMZM.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./clsx-Ciqy0D92.js";import"./Group-BmEjfMGD.js";import"./FieldError-BxVlGG_h.js";import"./Text-D6Srqbyc.js";import"./Text-CA1blZ7p.js";import"./Button-r5FEcXKA.js";import"./Hidden-Dy9FDq_i.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./SelectionIndicator-BFcBA69R.js";import"./useField-Do1u8hN3.js";import"./VisuallyHidden-DCQS44v1.js";import"./useControlledState-BexPn5vQ.js";import"./Label-Djib92Ef.js";import"./Dialog-Dd7oJhma.js";import"./RSPContexts-DhqrhFMI.js";import"./OverlayArrow-DOSEjS3e.js";import"./useResizeObserver-lGR9_MiC.js";import"./Collection-ufR-ynN_.js";import"./index-2H2h2DF8.js";import"./Separator-g6rmnRqd.js";import"./SelectionManager-DFf4iKUm.js";import"./useEvent-DtZHTgkv.js";import"./scrollIntoView-DixLNrnP.js";import"./useDescription-Df78gmXN.js";import"./ListKeyboardDelegate-uWRRNnxO.js";import"./PressResponder-BNGsEO2H.js";import"./useLocalizedStringFormatter-BF0ENpbS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_EkHvhyP.js";import"./getScrollParent-CRWGRsX_.js";import"./Dialog-CV1Xdzk8.js";import"./x-BvWk0FrP.js";import"./createLucideIcon-C2PX8F3A.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./Heading-CUHS5E_c.js";import"./info-CfBz-e-5.js";import"./Popover-Aem2Mu46.js";import"./check-D5Aot5iT.js";import"./useToggleState-BlJWxHoy.js";import"./TextFieldBase-Cvmdoet5.js";import"./Input-D_Vce_3G.js";import"./useTextField-AV2_XkOS.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Br6D_228.js";import"./DragAndDrop-Q_86opdk.js";import"./inertValue-B79atYmm.js";import"./useListState-B24m7-F7.js";import"./TagGroup-CyZ_720J.js";import"./useHighlightSelectionDescription-CubTK3wx.js";import"./useUpdateEffect-C13oSkuA.js";import"./useHasTabbableChild-CXatDQ_P.js";import"./chevron-down-wF0jfE7Y.js";import"./Virtualizer-D6qojEfu.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
