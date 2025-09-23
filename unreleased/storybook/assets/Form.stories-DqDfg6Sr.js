import{j as n}from"./iframe-CKDWBnzr.js";import{$ as j}from"./Form-DlHBNdVp.js";import{G}from"./Grid-DG_PIjTC.js";import{G as e}from"./GridItem-G9ncaNHA.js";import{T as r}from"./TextField-BQM84Ljt.js";import{S as I}from"./Select-CWdl3fYu.js";import{B as a}from"./Button-CGQw6DzM.js";import{R as g,a as b}from"./Radio-DN8ar48b.js";import{C as h}from"./CheckboxGroup-Cf_8HmuX.js";import{C as k}from"./Checkbox-B0-QcJgg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CIYVDnlt.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-GB841knn.js";import"./useFocusRing-1J8kx0bn.js";import"./index-DuMHkP-v.js";import"./index-DDGIE9ro.js";import"./TextFieldBase-QPuBbKis.js";import"./TextField-Cbv4gmO-.js";import"./FieldError-BtWlvWTC.js";import"./Text-Dn8Oiz4c.js";import"./Text-wnwQv1ot.js";import"./ListKeyboardDelegate-BR9XGYCM.js";import"./SelectionManager-DB-HO5Vc.js";import"./useEvent-N2jiyD7G.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B3GUh1rq.js";import"./useDescription-CesxVp8r.js";import"./useControlledState-BxRrFSbM.js";import"./Group-DRXc7Bon.js";import"./Input-CQILrI3n.js";import"./Hidden-Bxnsj7EJ.js";import"./Button-D6qOc4-k.js";import"./useLabels-BMF9dwqR.js";import"./useButton-CdXes42U.js";import"./useTextField-B6h9my0w.js";import"./useField-DQExrRag.js";import"./TextField.module-DjUItNl5.js";import"./Label-C07RzCAi.js";import"./Dialog-Bmpdfs6F.js";import"./RSPContexts-BWhLOW-v.js";import"./OverlayArrow-DP2aURGe.js";import"./useResizeObserver-Bumk8muE.js";import"./Collection-B8bXDrdj.js";import"./index-1TM-4pxc.js";import"./Separator-C8f1q2ZF.js";import"./PressResponder-B3-ejgCR.js";import"./useLocalizedStringFormatter-BJGzceHJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CQeo-YR0.js";import"./Dialog-BQ_OUF_y.js";import"./useLocalizedStringFormatter-DfNqEmBa.js";import"./x-DTpP1q6c.js";import"./createLucideIcon-CN2f7vt_.js";import"./Heading-eiUKuPZg.js";import"./info-QtCL70ue.js";import"./Tag-JYU5d0iH.js";import"./ListBox-BuAuWJaI.js";import"./DragAndDrop-CiwS9mk0.js";import"./inertValue-DPNB2dbB.js";import"./useListState-BGAZJr2q.js";import"./useHighlightSelectionDescription-pl7gHot1.js";import"./useUpdateEffect-CP-8SCRF.js";import"./useHasTabbableChild-D7CNMzog.js";import"./check-DfFKrC9Z.js";import"./ListBoxSection-DXJQv7pb.js";import"./Virtualizer-D-vEHEpC.js";import"./useObserveElement-BNu4v2kR.js";import"./chevron-down-qf1mPSpR.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-hiA83rN1.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
