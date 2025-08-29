import{j as n}from"./iframe-C_VRINH-.js";import{$ as j}from"./Form-Ckn2udqi.js";import{G}from"./Grid-C21CLv7T.js";import{G as e}from"./GridItem-Bg-aix0W.js";import{T as r}from"./TextField-o4EqBqDk.js";import{S as I}from"./Select-96xWIvAT.js";import{B as a}from"./Button-BBm0Cwr-.js";import{R as g,a as b}from"./Radio-CmnssjUL.js";import{C as h}from"./CheckboxGroup-T1p5ezNf.js";import{C as k}from"./Checkbox-2mFSdpb5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DXayxLsy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-rCnA4OaW.js";import"./useFocusRing-Dv_VN0Lg.js";import"./index-C0YVE2JG.js";import"./index-_yfYLSkX.js";import"./TextFieldBase-CsoAx85S.js";import"./TextField-BkkRI3wc.js";import"./FieldError-BhJF61NB.js";import"./Text-BYhiGUIm.js";import"./Text-Dtfb6fSx.js";import"./Input-DIMMfuXO.js";import"./Hidden-Dbkmm61k.js";import"./Button-SSMmmdpd.js";import"./useLabels-DpkLBKsS.js";import"./useButton-Btlj9W1H.js";import"./useTextField-CP1PF1D9.js";import"./useControlledState-ClSEVNGl.js";import"./useField-aPN2EXxb.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BBEeqK9F.js";import"./Dialog-BvIEXMYl.js";import"./RSPContexts-CkY3kgMJ.js";import"./OverlayArrow-Bry3CQxl.js";import"./useResizeObserver-Ew5k0VCQ.js";import"./Collection-jdpt3IAl.js";import"./index-C5RSfdKO.js";import"./Separator-CqV_4uUz.js";import"./SelectionManager-DhGwotXn.js";import"./useEvent-DA_FrVTg.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D0osISWX.js";import"./useDescription-CqdztY3Y.js";import"./ListKeyboardDelegate-BW4ZihnH.js";import"./PressResponder-CFRSOUCg.js";import"./useLocalizedStringFormatter-v0VkWtJs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-TT6CKio2.js";import"./Dialog-CzAfcmDE.js";import"./useLocalizedStringFormatter-YtGKiDxC.js";import"./x-DaNDt_LG.js";import"./createLucideIcon-QLEk5Dtq.js";import"./Heading-BswdROBQ.js";import"./info-BXIihvoj.js";import"./Tag-CEg53SFr.js";import"./ListBox-B0QOpfGf.js";import"./DragAndDrop-Bhn5PLAj.js";import"./inertValue-B_nIERYZ.js";import"./useListState-D1lZ1cpY.js";import"./useHighlightSelectionDescription-DIxYT_mh.js";import"./useUpdateEffect-CsSB98iz.js";import"./useHasTabbableChild-B5qURtnl.js";import"./check-DHuj8UYU.js";import"./ListBoxSection-B57pdavj.js";import"./Virtualizer-CItfprvR.js";import"./useObserveElement-B4q-TaXJ.js";import"./chevron-down-C67iRT0P.js";import"./Button.module-CF2bVDCq.js";import"./Group-Bhe_NHLO.js";import"./useToggleState-HAygyjGt.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
