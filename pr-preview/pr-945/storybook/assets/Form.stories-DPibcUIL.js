import{j as e}from"./iframe-CTbPuyiZ.js";import{$ as c}from"./Form-BydZV5WJ.js";import{G as d}from"./Grid-BxOUA_SN.js";import{G as i}from"./GridItem-DroDvxGR.js";import{T as t}from"./TextField-BwVU9ZgN.js";import{S as l}from"./Select-kwSdk3ck.js";import{B as a}from"./Button-CYxRok4a.js";import{R as x,a as u}from"./Radio-BYh2e7Dp.js";import{C as I}from"./CheckboxGroup-C0kNPLDe.js";import{C as G}from"./Checkbox-BVF5oHAQ.js";import{L as p}from"./ListBoxItem-BNsm0sZ0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C6hfgLvT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B9-OiVJw.js";import"./useFocusRing-n3eJMlTT.js";import"./index-Bgxm6v1H.js";import"./index-Cu3zMLv9.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Acmi1WgV.js";import"./TextField-Be84hmA1.js";import"./FieldError-K-Xe6uTG.js";import"./Text-mSNC73zz.js";import"./Text-vMxsj9yI.js";import"./RSPContexts-ClJnUPs5.js";import"./Group-CkmgWoPJ.js";import"./Input-SD8NZUmF.js";import"./Hidden-DaJx6vxq.js";import"./Button-CNOgGNQG.js";import"./useLabels-gUEAKYDn.js";import"./useButton-IIBwAU4K.js";import"./useTextField-Cd_ogaIw.js";import"./useControlledState-Dm0v7F1R.js";import"./useField-B_Z_BFtL.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-C1NU5p3-.js";import"./Dialog-DPFX4MCs.js";import"./OverlayArrow-DJ0mPePA.js";import"./useResizeObserver-BUobZ2m6.js";import"./Collection-BBEOqT8K.js";import"./index-BMmayFd4.js";import"./Separator-BguzASD7.js";import"./SelectionManager-rdq46V5Z.js";import"./useEvent-5NbWc272.js";import"./scrollIntoView-r8-_icar.js";import"./SelectionIndicator-qNrhRmYv.js";import"./useDescription-Bz8Mdm6f.js";import"./ListKeyboardDelegate-A_4yUQtO.js";import"./PressResponder-BJ8UD5wa.js";import"./useLocalizedStringFormatter-Dq6DvKsR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Boh-5e6O.js";import"./VisuallyHidden-sLTk1Jd1.js";import"./x-C-6TIg3t.js";import"./createLucideIcon-DcaVUwzg.js";import"./useLocalizedStringFormatter-B364Tmw0.js";import"./Heading-BRqMFDd5.js";import"./info-DPeGZwiZ.js";import"./Popover-BwbIdq-q.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B2bejTKt.js";import"./DragAndDrop-BhEEAYw2.js";import"./inertValue-fEQFVeQZ.js";import"./useListState-lECvLkJk.js";import"./Tag-C7Gl1ov2.js";import"./useHighlightSelectionDescription-Bj0LSvQ9.js";import"./useUpdateEffect-T75wA-uM.js";import"./useHasTabbableChild-BtlfbRTH.js";import"./chevron-down-D0x0vp4C.js";import"./Button.module-CtQ1deO8.js";import"./check-DIx3zoRA.js";import"./useToggleState-D8tRBtRa.js";import"./Virtualizer-qgiD6BVo.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
