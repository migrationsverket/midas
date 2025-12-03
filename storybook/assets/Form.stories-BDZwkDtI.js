import{j as e}from"./iframe-CCQfngwq.js";import{$ as c}from"./Form-BPQSERZX.js";import{G as d}from"./Grid-CEfCHt_8.js";import{G as i}from"./GridItem-DJIOdQ7g.js";import{T as t}from"./TextField-CAnYn0ID.js";import{S as l}from"./Select-B68dMAXl.js";import{B as a}from"./Button-Bab2JnFs.js";import{R as x,a as u}from"./Radio-Dz1hqqdi.js";import{C as I}from"./CheckboxGroup-CFNUBgLy.js";import{C as G}from"./Checkbox-DAvuPFse.js";import{L as p}from"./ListBoxItem-CjuDfBv9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CgsB8-M-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bde0T_x_.js";import"./useFocusRing-DrqjHVCw.js";import"./index-ByVvlwyD.js";import"./index-Cw_5Evfx.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CZzRr7yB.js";import"./TextField-DZxBHtEH.js";import"./FieldError-Bdi6QzIL.js";import"./Text-Cw_qglJK.js";import"./Text-Cc3exSDh.js";import"./RSPContexts-5wOIRLjy.js";import"./Group-bdfqTrkL.js";import"./Input-B3Kg1zbO.js";import"./Hidden-CbIGjTgf.js";import"./Button-5oXIvCJG.js";import"./useLabels-ChtSCMDo.js";import"./useButton-C3KQprnb.js";import"./useTextField-BuTt4Boo.js";import"./useControlledState-D-jefNLs.js";import"./useField-BbQHz5Sg.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-VRnRTiQi.js";import"./Dialog-2pOyPZi5.js";import"./OverlayArrow-BKIb9vHV.js";import"./useResizeObserver-CAQkbVjr.js";import"./Collection-CFGCNd8k.js";import"./index-Bh78NwXD.js";import"./Separator-CTVimljj.js";import"./SelectionManager-CDxR94nf.js";import"./useEvent-DvrGnkNh.js";import"./scrollIntoView-BGFG9DOp.js";import"./SelectionIndicator-CX-Ak5JY.js";import"./useDescription-Cp__ppAa.js";import"./ListKeyboardDelegate-vJISlKib.js";import"./PressResponder-BPmSRe7N.js";import"./useLocalizedStringFormatter-fWmNxkyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-EuR23wxh.js";import"./VisuallyHidden-QnJstid8.js";import"./x-BkcaeSqw.js";import"./createLucideIcon-mKithfj1.js";import"./useLocalizedStringFormatter-C-1-g-Qi.js";import"./Heading-BbgRD-Zw.js";import"./info-0M2ejYG_.js";import"./Popover-CQsjUmkL.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-YcCmnghm.js";import"./DragAndDrop-C0obpKLs.js";import"./inertValue-BpZMrtWL.js";import"./useListState-BoYGdVCT.js";import"./Tag-DYJTFKmC.js";import"./useHighlightSelectionDescription-BYn1SXxg.js";import"./useUpdateEffect-CTcA_92y.js";import"./useHasTabbableChild-DCVJ8dBc.js";import"./chevron-down-BuR58Pl_.js";import"./Button.module-Co5e5YHp.js";import"./check-CxguyC84.js";import"./useToggleState-Cgp9cBx_.js";import"./Virtualizer-BLBBo-xp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
