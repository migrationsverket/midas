import{j as e}from"./iframe-O2McX3yB.js";import{c}from"./Form-CM6Fo3tM.js";import{G as d}from"./Grid-BWF2EeQ8.js";import{G as i}from"./GridItem-DTd8hUZR.js";import{a as x,R as u}from"./Radio-BEHz1Nfl.js";import{C as I}from"./CheckboxGroup-BJ_Ya8sK.js";import{C as G}from"./Checkbox-BMSKmPPv.js";import{T as t}from"./TextField-DhbLGz3H.js";import{S as l}from"./Select-EkQM7BgM.js";import{L as p}from"./ListBoxItem-CPayF-Jn.js";import{B as a}from"./Button-D2h_fsiV.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C_4jX8C9.js";import"./utils-DO-wSHzc.js";import"./clsx-B-dksMZM.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./clsx-Ciqy0D92.js";import"./Group-DIMSG4ag.js";import"./FieldError-CWyB2qd4.js";import"./Text-7Ipy1BR9.js";import"./Text-YZ7QSVuR.js";import"./Button-2hnImx6E.js";import"./Hidden-kbzwSHo-.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./SelectionIndicator-AuNVYjmH.js";import"./useField-CdhU-8jB.js";import"./VisuallyHidden-CVECtPk8.js";import"./useControlledState-CDscPa5k.js";import"./Label-C90t5Qit.js";import"./Dialog-DssWk71x.js";import"./RSPContexts-D9PIXrmH.js";import"./OverlayArrow-C3RzwJA8.js";import"./useResizeObserver-DmVTWwXU.js";import"./Collection-D_qCe12e.js";import"./index-CIqtmhd8.js";import"./Separator-D-dfcXvV.js";import"./SelectionManager-B61PS9GO.js";import"./useEvent-D1NiEUxW.js";import"./scrollIntoView-CYxkmzpX.js";import"./useDescription-DyLngsul.js";import"./ListKeyboardDelegate-DKIOtHk3.js";import"./PressResponder-C85iqAbq.js";import"./useLocalizedStringFormatter-DIk6ZtyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-t_x6ksxO.js";import"./getScrollParent-DMJ8Owx1.js";import"./Dialog-C1EIBnuD.js";import"./x-Bexz8DwZ.js";import"./createLucideIcon-C4xn0wXs.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./Heading-D_UODxYf.js";import"./info-BHSu_h8w.js";import"./Popover-Ks-RtaT5.js";import"./check-BCE__Jlz.js";import"./useToggleState-BGArRXuI.js";import"./TextFieldBase-BGtBJDpo.js";import"./Input-KNFPZfcO.js";import"./useTextField-D567ds9S.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DC_ZRspN.js";import"./DragAndDrop-DV1nl_hP.js";import"./inertValue-BieBnzNw.js";import"./useListState-eSmRuMCi.js";import"./TagGroup-CaI9KJzU.js";import"./useHighlightSelectionDescription-C2__VvWx.js";import"./useUpdateEffect-ngTbV_ju.js";import"./useHasTabbableChild-DriywoH3.js";import"./chevron-down-BqER7mxb.js";import"./Virtualizer-Bg3brwM2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
