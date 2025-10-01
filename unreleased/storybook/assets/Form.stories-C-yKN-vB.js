import{j as n}from"./iframe-c-OTsSLB.js";import{$ as j}from"./Form-DajJ1cE9.js";import{G}from"./Grid-D_XVI8lZ.js";import{G as e}from"./GridItem-CK-jTvDT.js";import{T as r}from"./TextField-BU5YZKqC.js";import{S as I}from"./Select-CdzcjvTq.js";import{B as a}from"./Button-DVVNT42z.js";import{R as g,a as b}from"./Radio-CXs3dfCM.js";import{C as h}from"./CheckboxGroup-BxO3qb6V.js";import{C as k}from"./Checkbox-BpqW-VcV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DmSro83S.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DQ7Ovtgu.js";import"./useFocusRing-5X5X_HTM.js";import"./index-DGihLut6.js";import"./index-CBPMXLvZ.js";import"./TextFieldBase-BfTtC5_w.js";import"./TextField-Cn7Pk5ti.js";import"./FieldError-BG-A7rvv.js";import"./Text-BkE6CLz1.js";import"./Text-Bm-fIGj9.js";import"./context-BnRsus0r.js";import"./SelectionManager-DOF2WcxD.js";import"./useEvent-BoZFzAWv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CPaxqP1h.js";import"./useDescription-A-7FZmQL.js";import"./useControlledState-Py_fFczF.js";import"./Group-BdldYMfx.js";import"./Input-B65WcSz4.js";import"./Hidden-rsYS1DNe.js";import"./Button-eONtAglJ.js";import"./useLabels-Bx-x79OI.js";import"./useButton-B64Vv4No.js";import"./useTextField-r2NuDsrV.js";import"./useField-DBWN-y2k.js";import"./TextField.module-DjUItNl5.js";import"./Label-CGnO-K5z.js";import"./Dialog-CZVsEqS2.js";import"./RSPContexts-CQ31y2lt.js";import"./OverlayArrow-DTe_By9a.js";import"./useResizeObserver-D_GjguyM.js";import"./Collection-CubMR1XY.js";import"./index-C2RfW0JG.js";import"./Separator-9hJv1ohr.js";import"./PressResponder-CuvdayLM.js";import"./useLocalizedStringFormatter-BfDbnqcs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ScYyMq4j.js";import"./useLocalizedStringFormatter-BVvu3P8g.js";import"./x-CgK9iRJd.js";import"./createLucideIcon-ClmXRBho.js";import"./Heading-Cs2r1C0g.js";import"./info-DyKtLbDL.js";import"./Popover-BfKSRAJg.js";import"./Tag-DpMCcP9x.js";import"./ListBox-CddH5CGP.js";import"./DragAndDrop-Ba1q-F9e.js";import"./inertValue-D_tS31x-.js";import"./useListState-CBZ_5Yiv.js";import"./useHighlightSelectionDescription-BmS-5C-3.js";import"./useUpdateEffect-CHe7qX1i.js";import"./useHasTabbableChild-8iRA5BKV.js";import"./check-CWzk4Kdj.js";import"./ListBoxSection-tzU1U87J.js";import"./Virtualizer-CnaFkeq8.js";import"./useObserveElement-LvR3Yza9.js";import"./chevron-down-NqbJp4Lq.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BC5RwFE3.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
