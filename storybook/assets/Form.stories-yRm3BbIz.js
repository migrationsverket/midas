import{j as e}from"./iframe-MifYwXyz.js";import{$ as c}from"./Form-BHuHVE3q.js";import{G as d}from"./Grid-BWTtGAGa.js";import{G as i}from"./GridItem-CiQmP3dc.js";import{a as x,R as u}from"./Radio-DYG7D6eW.js";import{C as I}from"./CheckboxGroup-2ylcWrpL.js";import{C as G}from"./Checkbox-Dr7M6M1M.js";import{T as t}from"./TextField-Ba2tCNuZ.js";import{S as l}from"./Select-D8LNS3b2.js";import{L as p}from"./ListBoxItem-BpghY---.js";import{B as a}from"./Button-BcTOGRQL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DQEE__1e.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bv3qCLcs.js";import"./useFocusRing-CshLtOVp.js";import"./index-C2YaqACl.js";import"./index-CDZjfK_p.js";import"./clsx-Ciqy0D92.js";import"./Group-Dyszqjp8.js";import"./FieldError-909Vsbkt.js";import"./Text-C2SPm1jh.js";import"./Text-Dt_sqIOk.js";import"./Button-CKNqLrwF.js";import"./Hidden-BW6dBRkK.js";import"./useLabels-C0p_nmcB.js";import"./useButton-Bi_I7gxU.js";import"./SelectionIndicator-3-7GMyH8.js";import"./useField-DhyKPenV.js";import"./VisuallyHidden-BKJVLMnZ.js";import"./useControlledState-Ck9De9Y4.js";import"./Label-C1VzgCgE.js";import"./Dialog-DqYyjSQ9.js";import"./RSPContexts-_MaIYEvI.js";import"./OverlayArrow-D_65PUVW.js";import"./useResizeObserver-D21IMsf9.js";import"./Collection-B0YoD_N2.js";import"./index-CIvMG0Kq.js";import"./Separator-BfEQuZMo.js";import"./SelectionManager-Crflqmi0.js";import"./useEvent-Bzi6Lqj5.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-5ZHxX6H6.js";import"./ListKeyboardDelegate--XGA4FuR.js";import"./PressResponder-BpCArYu-.js";import"./useLocalizedStringFormatter-C3fn2FlC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DN4af1yt.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-D5mMwQqA.js";import"./createLucideIcon-Ci3Mi_gr.js";import"./useLocalizedStringFormatter-GZgY9UBY.js";import"./Heading-ypRMm-U6.js";import"./info-CqOzxSMD.js";import"./Popover-BGwUVHns.js";import"./check-0fG5TODW.js";import"./useToggleState-D30KcIWP.js";import"./TextFieldBase-Yj47suu_.js";import"./TextField-CO-OpTpz.js";import"./Input-Chzoln-a.js";import"./useTextField-DH66ZZE3.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-xuz1mQcz.js";import"./DragAndDrop-DqVobd_Z.js";import"./inertValue-CkH0eEmP.js";import"./useListState-BxDEUUhU.js";import"./Tag-CtuhoRj3.js";import"./useHighlightSelectionDescription-AaS3Yt9d.js";import"./useUpdateEffect-DVcdbKwy.js";import"./useHasTabbableChild-C_sf07De.js";import"./chevron-down-VBYd0GjY.js";import"./Virtualizer-DyUKXio-.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
