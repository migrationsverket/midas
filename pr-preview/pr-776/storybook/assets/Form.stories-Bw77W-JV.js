import{j as n}from"./iframe-CaTehrPZ.js";import{$ as j}from"./Form-CKSLTZO1.js";import{G}from"./Grid-BBuDNPTP.js";import{G as e}from"./GridItem-DCWt3nhY.js";import{T as r}from"./TextField-_GWUrjjI.js";import{S as I}from"./Select-BqgG8yZf.js";import{B as a}from"./Button-Buf6l9l1.js";import{R as g,a as b}from"./Radio-BFsA5uIU.js";import{C as h}from"./CheckboxGroup-B1hbx18O.js";import{C as k}from"./Checkbox-CV90zsMM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CfOR-KSy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CiLVfoJe.js";import"./useFocusRing-CESEA6ML.js";import"./index-B6VyMR8D.js";import"./index-DKux4EUk.js";import"./TextFieldBase-80jzCk3n.js";import"./TextField--Beignms.js";import"./FieldError-ucyk60Gt.js";import"./Text-BVeEnIcV.js";import"./Text-B6K0xexH.js";import"./ListKeyboardDelegate-B-B7sp_G.js";import"./SelectionManager-DWTRI4sc.js";import"./useEvent-gTF2P3E_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C5A5dqJm.js";import"./useDescription-DEJGRTo8.js";import"./useControlledState-C46R8h6l.js";import"./Group-B48VEGe-.js";import"./Input-Dk-MH7ig.js";import"./Hidden-BlGccWek.js";import"./Button-DVEtGYmw.js";import"./useLabels-B6bcn-xM.js";import"./useButton-D2QDUmGe.js";import"./useTextField-D8p4opEB.js";import"./useField-B33F63Q-.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CIHTNDNt.js";import"./Dialog-C0TRFvDP.js";import"./RSPContexts-0Y4CqVrP.js";import"./OverlayArrow-CxaosKMz.js";import"./useResizeObserver-TUARpa_C.js";import"./Collection-CKosh5QQ.js";import"./index-D6nkslD-.js";import"./Separator-CzVfPTVB.js";import"./PressResponder-DsxvyiHu.js";import"./useLocalizedStringFormatter-vk5W2tLq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B-cMcenH.js";import"./Dialog-CLXFFMUb.js";import"./useLocalizedStringFormatter-CPPZmh6N.js";import"./x-C9db_WwY.js";import"./createLucideIcon-DyLXW-Uf.js";import"./Heading-7SkvDtZB.js";import"./info-CZEKuk11.js";import"./Tag-CP9LHn4X.js";import"./ListBox-DAEktOWW.js";import"./DragAndDrop-C8rLEA5s.js";import"./inertValue-BC_zk-Ln.js";import"./useListState-DzySxP7C.js";import"./useHighlightSelectionDescription-B5dhjYD9.js";import"./useUpdateEffect-DpY1qC9f.js";import"./useHasTabbableChild-Dj1af5sL.js";import"./check-BI4ZQAi5.js";import"./ListBoxSection-CBAPZpaj.js";import"./Virtualizer-CqNVS758.js";import"./useObserveElement-C8aTlRGG.js";import"./chevron-down-CMTmDqhx.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-DwJUo_Zn.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
