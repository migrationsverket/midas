import{j as e}from"./iframe-Cwp_nH2i.js";import{c}from"./Form-DM5Rvxjr.js";import{G as d}from"./Grid-D5jTjc-Q.js";import{G as i}from"./GridItem-vkcDw6xQ.js";import{a as x,R as u}from"./Radio-DsfMLZA5.js";import{C as I}from"./CheckboxGroup-CIaRm8yS.js";import{C as G}from"./Checkbox-D9_fdJLh.js";import{T as t}from"./TextField-vPC335th.js";import{S as l}from"./Select-ceDmvsqi.js";import{L as p}from"./ListBoxItem-n82OAxjW.js";import{B as a}from"./Button-D-SHIeik.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DNNGYKVr.js";import"./utils-D58tzseF.js";import"./clsx-B-dksMZM.js";import"./index-DyCqZMYr.js";import"./index-kB1ochzG.js";import"./clsx-Ciqy0D92.js";import"./Group-Bif-dsKf.js";import"./FieldError-DkJf33vr.js";import"./Text-h4_45G40.js";import"./Text-ooZ4PKli.js";import"./Button-BYfq0wpH.js";import"./Hidden-BUSQ_LLM.js";import"./useLabel-D7lULVXa.js";import"./useLabels-cVarSgwU.js";import"./useButton-BNvE6ltl.js";import"./SelectionIndicator-D_R3OtUk.js";import"./useField-B_VPmbL6.js";import"./VisuallyHidden-c7FiOqp6.js";import"./useControlledState-DjKqHFBe.js";import"./Label-D7-uSz7K.js";import"./Dialog-5eEQW3x8.js";import"./RSPContexts-BgIiqfY1.js";import"./OverlayArrow-CM5eq7Nh.js";import"./useResizeObserver-CpVdiUQc.js";import"./Collection-CXC_OfZ3.js";import"./index-DbD20U-h.js";import"./Separator-W0lIkXut.js";import"./SelectionManager-BVnpLiio.js";import"./useEvent-BjIvz2Po.js";import"./scrollIntoView-BKCjK7iV.js";import"./useDescription-CryxMFSD.js";import"./ListKeyboardDelegate-p2Ps1sEj.js";import"./PressResponder-DFNo2IJs.js";import"./useLocalizedStringFormatter-C-PIG7PB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-I0f_CXeG.js";import"./getScrollParent-CS9TKH4q.js";import"./ModalOverlay-Dal6K64g.js";import"./x-DV3Rl8a5.js";import"./createLucideIcon-CL7AaBb9.js";import"./useLocalizedStringFormatter-C82ZJvLt.js";import"./Heading-b3KA7tkq.js";import"./info-CDhbDRi1.js";import"./Popover-CvD85Dw3.js";import"./check-c0ZmnFlT.js";import"./useToggleState-CmVPGROy.js";import"./TextFieldBase-zyG8Is36.js";import"./Input-CAIXe99i.js";import"./useTextField-DpE7ZZyR.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-UuCZtdcP.js";import"./DragAndDrop-CcvElk9v.js";import"./inertValue-9h4ZBgIL.js";import"./useListState-rwUqVnWG.js";import"./TagGroup--0b6-4SE.js";import"./useHighlightSelectionDescription-DDwQLdfn.js";import"./useUpdateEffect-m_tK5YKk.js";import"./useHasTabbableChild-CQjgVjsS.js";import"./chevron-down-Du_kgS8m.js";import"./Virtualizer-DxW6IXHi.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
