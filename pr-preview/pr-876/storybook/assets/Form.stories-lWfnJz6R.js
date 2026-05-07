import{j as e}from"./iframe-BNcGdhPn.js";import{c}from"./Form-BiZUbCcr.js";import{G as d}from"./Grid-Sn6Xs1Jc.js";import{G as i}from"./GridItem-1n0HEuaB.js";import{a as x,R as u}from"./Radio--AUfE9-O.js";import{C as I}from"./CheckboxGroup-vqBZMRnx.js";import{C as G}from"./Checkbox-Dtxraftf.js";import{T as t}from"./TextField-CKjg311x.js";import{S as l}from"./Select-DOfx5r5T.js";import{L as p}from"./ListBoxItem-CvuygsI8.js";import{B as a}from"./Button-BgPh4XDv.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Cu9nwss3.js";import"./utils-BPT-EsfX.js";import"./clsx-B-dksMZM.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./clsx-Ciqy0D92.js";import"./Group-Dtrx9Ex4.js";import"./FieldError-CFxnUxOD.js";import"./Text-Dc9-vgHL.js";import"./Text-CjSndq1s.js";import"./Button-CSPLOvS6.js";import"./Hidden-D26ysej5.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./SelectionIndicator-C8uxE-m0.js";import"./useField-3oXs5MuB.js";import"./VisuallyHidden-BrOw3xQL.js";import"./useControlledState-BMDHyIEM.js";import"./Label-DIQtgpJR.js";import"./Dialog-B-cDCHOP.js";import"./RSPContexts-DHoclz_N.js";import"./OverlayArrow-C245l6va.js";import"./useResizeObserver-gfM9DMFm.js";import"./Collection-C1nt9JNW.js";import"./index-GhtlZNTq.js";import"./Separator-w59tPuNY.js";import"./SelectionManager-D9zlF73V.js";import"./useEvent-CU5jG29K.js";import"./scrollIntoView-DW5hP9Ho.js";import"./useDescription-B3I2KEu4.js";import"./ListKeyboardDelegate-BUSiOdW7.js";import"./PressResponder-Dyf4t-uc.js";import"./useLocalizedStringFormatter-Boi35b_5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aHSinPf_.js";import"./getScrollParent-Dxp0T4Mw.js";import"./ModalOverlay-BxxQGZhw.js";import"./x-Cn8Z5y6x.js";import"./createLucideIcon-CIzIYBm5.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./Heading-ChJbJ3Ze.js";import"./info-CecoY-7I.js";import"./Popover-2eTZGnSP.js";import"./check-B55JfsTc.js";import"./useToggleState-CnmwjxWl.js";import"./TextFieldBase-BRum_fQB.js";import"./Input-Btp2H53i.js";import"./useTextField-Bp3odHt0.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BdIMk8wL.js";import"./DragAndDrop-CN_XRCtO.js";import"./inertValue-UgyfMDTk.js";import"./useListState-Bp79Dcbv.js";import"./TagGroup-CVyOESnY.js";import"./useHighlightSelectionDescription-Dq1CW2zc.js";import"./useUpdateEffect-N3ZpADMd.js";import"./useHasTabbableChild-BVrIzOi6.js";import"./chevron-down-VmXpjRHH.js";import"./Virtualizer-0lV59OtI.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
