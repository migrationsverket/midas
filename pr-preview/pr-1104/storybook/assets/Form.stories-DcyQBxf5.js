import{j as e}from"./iframe-Bm0DrSMO.js";import{$ as c}from"./Form-XMkLrXkW.js";import{G as d}from"./Grid-CA3yg-Ld.js";import{G as i}from"./GridItem-DiCa8d9Z.js";import{a as x,R as u}from"./Radio-DNLaA_5d.js";import{C as I}from"./CheckboxGroup-CQS0Y3l4.js";import{C as G}from"./Checkbox-CKLqxTHU.js";import{T as t}from"./TextField-Dt2PPTYk.js";import{S as l}from"./Select-Cg17X2ky.js";import{L as p}from"./ListBoxItem-Br3GfiDk.js";import{B as a}from"./Button-CekYPC-I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CoM9YHiu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CCMpRbRk.js";import"./useFocusRing-CkTqT8wc.js";import"./index-CFyUkJmM.js";import"./index-CuQSmexf.js";import"./clsx-Ciqy0D92.js";import"./Group-hOP0SAyh.js";import"./FieldError-CCe7rZes.js";import"./Text-CvUQuXzc.js";import"./Text-BLzt5HZQ.js";import"./Button-BlmcdTpb.js";import"./Hidden-RcWRgJ8x.js";import"./useLabels-B81GYCN9.js";import"./useButton-BNEnbj2x.js";import"./SelectionIndicator-bnleW8Zx.js";import"./useField-DBy0P2Fr.js";import"./VisuallyHidden-B5PU83U6.js";import"./useControlledState-_TpPhYBA.js";import"./Label-BGK8Rca9.js";import"./Dialog-BbfilgdF.js";import"./RSPContexts-nAfEcYEJ.js";import"./OverlayArrow-D4l3ajFn.js";import"./useResizeObserver-OBobqjdZ.js";import"./Collection-BAnlV6Ln.js";import"./index-DQ_G-xOK.js";import"./Separator-BvxaLU5Z.js";import"./SelectionManager-BJ6XMe41.js";import"./useEvent-Bam-6ZDs.js";import"./scrollIntoView-ChcThMc9.js";import"./useDescription-BgQlQb3M.js";import"./ListKeyboardDelegate-yZYnbXf1.js";import"./PressResponder-DLhCu5NC.js";import"./useLocalizedStringFormatter-DWI_FIzZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_4zRhOjD.js";import"./getScrollParent-D9CIxd-t.js";import"./x-Dbz_bc1H.js";import"./createLucideIcon-CUh6klxC.js";import"./useLocalizedStringFormatter-Ci4W8RSD.js";import"./Heading-BoQ-AyCY.js";import"./info-CZx8COQR.js";import"./Popover-C8fWg4HG.js";import"./check-CtSyQMUn.js";import"./useToggleState-CGsF022p.js";import"./TextFieldBase-CJLwQQRP.js";import"./Input-C0FfG9NB.js";import"./useTextField-DPyJ1gWj.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dbqbdi_f.js";import"./DragAndDrop-Btirk7Dc.js";import"./inertValue-CkrNK-DQ.js";import"./useListState-41JcxC-E.js";import"./TagGroup-BPXBUhqu.js";import"./useHighlightSelectionDescription-Cd7HBL48.js";import"./useUpdateEffect-DQQghGWZ.js";import"./useHasTabbableChild-dAD0uPVw.js";import"./chevron-down-DmeO6JhN.js";import"./Virtualizer-CqF73fms.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
