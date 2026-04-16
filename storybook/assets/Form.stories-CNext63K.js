import{j as e}from"./iframe-CrvsXgmc.js";import{c}from"./Form-bos5N932.js";import{G as d}from"./Grid-CRHJ6HNr.js";import{G as i}from"./GridItem-BLMG4zq2.js";import{a as x,R as u}from"./Radio-C2hJn8EG.js";import{C as I}from"./CheckboxGroup-DPXraKHN.js";import{C as G}from"./Checkbox-BZUk4yn4.js";import{T as t}from"./TextField-B0Kgqf1m.js";import{S as l}from"./Select-CoC-2xj7.js";import{L as p}from"./ListBoxItem-CPSYDK5Y.js";import{B as a}from"./Button-C1guSp-1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Y3IR8t1i.js";import"./utils-gzCDVK3q.js";import"./clsx-B-dksMZM.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./clsx-Ciqy0D92.js";import"./Group-BbSxKl7e.js";import"./FieldError-5hEdY4LM.js";import"./Text-CF9Q2mcX.js";import"./Text-CA7uWGGn.js";import"./Button-BJCsZZXs.js";import"./Hidden-DAMs1NRQ.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./SelectionIndicator-o2cRMrjj.js";import"./useField-ctyqcCoa.js";import"./VisuallyHidden-GavGRjxA.js";import"./useControlledState-CFUIREeB.js";import"./Label-DC1BslHI.js";import"./Dialog-BAorNuLL.js";import"./RSPContexts-DH1zBAtU.js";import"./OverlayArrow-j-4w6ptt.js";import"./useResizeObserver-DS_Mr__l.js";import"./Collection-DgAx05eF.js";import"./index-CXAqSaFB.js";import"./Separator-Cfr8Q9pc.js";import"./SelectionManager-uwLQE_60.js";import"./useEvent-DI2Xn_Gs.js";import"./scrollIntoView-C_cKPCXn.js";import"./useDescription-Cw3L3Xvg.js";import"./ListKeyboardDelegate-BxUpHfVv.js";import"./PressResponder-DQ6SDLVP.js";import"./useLocalizedStringFormatter-CdYDGaj0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7nDb7Uq.js";import"./getScrollParent-DN_amqRA.js";import"./ModalOverlay-CUkgOGL-.js";import"./x-_k-E3REV.js";import"./createLucideIcon-C4drZqEd.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./Heading-BYcCu-yi.js";import"./info-_82HXk6z.js";import"./Popover-BlcHhC3m.js";import"./check-CaH8XxLm.js";import"./useToggleState-71MHAyi2.js";import"./TextFieldBase-yfsF5dfM.js";import"./Input-DXCRAbnb.js";import"./useTextField-CLgkkZtp.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-SfNwEDUU.js";import"./DragAndDrop-DmhbIFkL.js";import"./inertValue-DWNYJmzE.js";import"./useListState-CPRfiCZN.js";import"./TagGroup-CG-T1FPx.js";import"./useHighlightSelectionDescription-gpSbmBc-.js";import"./useUpdateEffect-CA7I7uvS.js";import"./useHasTabbableChild-BCJrWiax.js";import"./chevron-down-BG66boRx.js";import"./Virtualizer-DPb2yhRD.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
