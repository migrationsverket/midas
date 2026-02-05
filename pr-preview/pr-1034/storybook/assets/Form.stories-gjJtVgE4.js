import{j as e}from"./iframe-HG_Z2pg-.js";import{$ as c}from"./Form-BEkKZTA7.js";import{G as d}from"./Grid-DEOFFC0d.js";import{G as i}from"./GridItem-DLp0qyoF.js";import{a as x,R as u}from"./Radio-Co6GHtv2.js";import{C as I}from"./CheckboxGroup-CQIxvIt3.js";import{C as G}from"./Checkbox-B7mm0fkC.js";import{T as t}from"./TextField-c7UqbiPA.js";import{S as l}from"./Select-CDoew3et.js";import{L as p}from"./ListBoxItem-asI_RR4y.js";import{B as a}from"./Button-C-MBQNdi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CdY9616D.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ATFip75W.js";import"./useFocusRing-C2pNSdUj.js";import"./index-CMaq89o6.js";import"./index-iNkvpkXc.js";import"./clsx-Ciqy0D92.js";import"./Group-CgKBaH96.js";import"./FieldError-CD7fxHOi.js";import"./Text-CPFj8IEW.js";import"./Text-CKZFwH_2.js";import"./Button-DAM_PuZi.js";import"./Hidden-BkYvshkQ.js";import"./useLabels-CYZjihjK.js";import"./useButton-gu6J6a7T.js";import"./SelectionIndicator-CYCN6V3S.js";import"./useField-CLeAY4am.js";import"./VisuallyHidden-L0YDRZd4.js";import"./useControlledState-sKIB1QYe.js";import"./Label-BkDEipyG.js";import"./Dialog-DyG2P5dM.js";import"./RSPContexts-rEVBiSVI.js";import"./OverlayArrow-CxQkpfnq.js";import"./useResizeObserver-CeCEK1FF.js";import"./Collection-BSaBUkOh.js";import"./index-CBto2vLy.js";import"./Separator-C6RpXoRb.js";import"./SelectionManager-DBA4BPE3.js";import"./useEvent-BB0Ydt5c.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BzOv_EiU.js";import"./ListKeyboardDelegate-BvXzhQRP.js";import"./PressResponder-DWz2bTvF.js";import"./useLocalizedStringFormatter-C17LFZpf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-83r22ReL.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DjjH4U3w.js";import"./createLucideIcon-CkaE1DwA.js";import"./useLocalizedStringFormatter-DYUm24Kr.js";import"./Heading-DuJqlEYV.js";import"./info-B50N3db5.js";import"./Popover-CO9pW_0n.js";import"./check-DFJE8aty.js";import"./useToggleState-C1N0M4hm.js";import"./TextFieldBase-CwX4DP41.js";import"./TextField-BtPVxgMa.js";import"./Input-CH3ERYNd.js";import"./useTextField-De_IytUE.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CobSRyd7.js";import"./DragAndDrop-DG7iUev2.js";import"./inertValue-SrJ2kSUf.js";import"./useListState-Ck6e4oxi.js";import"./Tag-Dqujg0J5.js";import"./useHighlightSelectionDescription-B93JCDUl.js";import"./useUpdateEffect-DXVQm5aU.js";import"./useHasTabbableChild-DP4gnTca.js";import"./chevron-down-BRVnyshK.js";import"./Virtualizer-BmHgxklw.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
