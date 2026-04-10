import{j as e}from"./iframe-CjS4NLOn.js";import{c}from"./Form-BO2cd7HV.js";import{G as d}from"./Grid-C5dNzKfl.js";import{G as i}from"./GridItem-4Wv1xwWf.js";import{a as x,R as u}from"./Radio-CE4IlEvR.js";import{C as I}from"./CheckboxGroup-B12v5315.js";import{C as G}from"./Checkbox-DJzxgVnb.js";import{T as t}from"./TextField-BT_kUllh.js";import{S as l}from"./Select-izYNLqQD.js";import{L as p}from"./ListBoxItem-vUnEyk0R.js";import{B as a}from"./Button-iv9BguPP.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DglKaSCo.js";import"./utils-Bd-AzVom.js";import"./clsx-B-dksMZM.js";import"./index-BAKX6Q0C.js";import"./index-Bkm3VJ40.js";import"./clsx-Ciqy0D92.js";import"./Group-D5gxugEo.js";import"./FieldError-mjdlktiQ.js";import"./Text-BbW2XwBz.js";import"./Text-CX-M1xx_.js";import"./Button-Dd-c5XOo.js";import"./Hidden-DQ5FusQj.js";import"./useLabel-BNspr0mf.js";import"./useLabels-Dg9_l0gi.js";import"./useButton-K15jCtz1.js";import"./SelectionIndicator-CWcDMFoj.js";import"./useField-B9WQ8ZUl.js";import"./VisuallyHidden-CY_5XPqM.js";import"./useControlledState-BbWK1__y.js";import"./Label-BnCfDUoG.js";import"./Dialog-Dc12lFt1.js";import"./RSPContexts-kqnwGWDt.js";import"./OverlayArrow-Cp2ICLCM.js";import"./useResizeObserver-BOPoLO7H.js";import"./Collection-D4qV2wHW.js";import"./index-BAbiaVhP.js";import"./Separator-CpprL7gR.js";import"./SelectionManager-BCUC7b48.js";import"./useEvent-CiAr47a4.js";import"./scrollIntoView-2fiPBvL-.js";import"./useDescription-CBNmeEe_.js";import"./ListKeyboardDelegate-8fQbIU8o.js";import"./PressResponder-C_CMVuXZ.js";import"./useLocalizedStringFormatter-gid5zSz2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ctB5lWfz.js";import"./getScrollParent-CSIbG2HY.js";import"./Modal-B4gH7KQG.js";import"./x-Dux1vDQf.js";import"./createLucideIcon-DkfyV_c3.js";import"./useLocalizedStringFormatter-FU720mIV.js";import"./Heading-pmYegQEd.js";import"./info-k4HkQ0Eq.js";import"./Popover-B-u84laR.js";import"./check-J6EiRMNo.js";import"./useToggleState-DrRy7Zt1.js";import"./TextFieldBase-f1lFdRvU.js";import"./Input-qegJS3K7.js";import"./useTextField-DnwCAK_R.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bh7oNK26.js";import"./DragAndDrop-Bn1OPxBu.js";import"./inertValue-DOJIBzud.js";import"./useListState-C055q1ae.js";import"./TagGroup-8b2BPloZ.js";import"./useHighlightSelectionDescription-20Z4BCUm.js";import"./useUpdateEffect-DS0b_jEY.js";import"./useHasTabbableChild-HrGtippn.js";import"./chevron-down-C4wqVGOV.js";import"./Virtualizer-BzddeBbA.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
